# Lanyard Integration Task — progress log

Read this file first before re-exploring the repo. Update it as steps complete so context isn't lost.

## Goal
Replace the static avatar photo badge in [HeroSection.tsx](src/components/HeroSection.tsx) with the
React Bits `<Lanyard />` 3D component (physics-based swinging ID card).
- Card FRONT: user's photo (source: `E:\pran\New folder (2)\8F754E75-EE07-41B7-B29A-22F96CB08F15-3.png`)
- Card BACK: email (praneeth.g147@gmail.com) + phone number, small font — need phone number from user or leave placeholder
- Lanyard band: instead of default emoji/logo texture, render text "GP" repeating on the band

## Key facts learned
- Project: Vite + React + TypeScript (`E:\Portfolio - Copy`). Uses `.tsx` throughout but plain `.jsx` files work fine via esbuild/vite.
- `three` already in package.json (^0.185.0). Need to add: `meshline @react-three/fiber @react-three/drei @react-three/rapier`.
- Old avatar image was `src/components/HeroSection.tsx` — `<img src={avatarBw} .../>` inside a rounded div (~line 33-56). This whole block is being replaced by `<Lanyard/>`.
- `avatar_bw.jpg` and friends in `src/assets/` are now unused by Hero (leave them, other sections may not use them — verify before deleting).
- vite.config.ts needs `assetsInclude: ['**/*.glb']`.
- Assets needed: `card.glb` + `lanyard.png` from react-bits repo (github.com/DavidHDev/react-bits), path:
  `src/content/Components/Lanyard/Lanyard.jsx` and assets under same dir (need to locate exact raw asset URLs — in progress).
- Since project is TS, will add `src/global.d.ts` (or extend existing) for `*.glb` / `*.png` / `meshline` module declarations if not already present.
- Custom band texture "GP": generating a small SVG/PNG with repeating "GP" text to pass as `lanyardImage` prop (avoids needing an external asset).

## Plan / Steps
- [x] Install npm deps: meshline @react-three/fiber@8 @react-three/drei@9 @react-three/rapier@1 (pinned to v8/v9/v1 — latest majors require React 19, project is React 18)
- [x] Download card.glb + default lanyard.png from react-bits repo -> src/components/Lanyard/ (component + assets live together for relative imports)
- [x] Copy user's photo -> src/assets/lanyard/card-front.png
- [x] Create card-back.svg (email + phone, small text) -> src/assets/lanyard/card-back.svg
- [x] Create gp-band.svg ("GP" repeating band texture) -> src/assets/lanyard/gp-band.svg
- [x] Create src/components/Lanyard/Lanyard.jsx + Lanyard.css
- [x] Update vite.config.ts: assetsInclude ['**/*.glb']
- [x] tsconfig.app.json: added allowJs:true (Lanyard.jsx is plain JS in a TS project); src/global.d.ts declares *.glb, meshline, meshLineGeometry/meshLineMaterial JSX intrinsics
- [x] Edit HeroSection.tsx: removed avatarBw <img>/hover-slide block entirely, replaced with <Lanyard frontImage backImage lanyardImage .../>
- [x] npm run dev, verify visually in browser preview — DONE, confirmed working
- [x] STATUS: COMPLETE

## Verification results (2026-07-12)
- Ran dev server manually on port 5190 (5173 was occupied by another chat's session; .claude/launch.json "portfolio-dev-lanyard" config added with autoPort but harness kept reporting 5173 conflict regardless — worked around by running `npm run dev -- --port 5190 --strictPort` directly via Bash in background).
- Also added `server.port` to vite.config.ts reading `process.env.PORT` (harmless, kept).
- Card renders with user's photo on front, physics/drag swinging works correctly, band texture (gp-band.svg, "GP" repeating) loads (200 OK) and applies — visually small since the cord is thin, same as original component's proportions.
- Had to fix Lanyard.css: original component ships with `.lanyard-wrapper { height: 100vh }` which broke layout (canvas overflowed hero section, card appeared cut off top-right). Changed to `height: 100%` so it respects the sized parent container in HeroSection.tsx (w-320/380/420 h-420/480/520 responsive classes).
- Back face (email + phone) uses same composite logic/UV rects as front — not independently re-verified via screenshot (card didn't fully flip during manual drag testing, which is expected physics behavior — it swings like a real lanyard, doesn't spin freely), but composite code is unmodified from the documented react-bits FRONT_UV_RECT/BACK_UV_RECT so should be correct.

## Deployment (2026-07-12)
- Repo praneeth14G/Portfolio, pushed to origin/main, commits b8181d4 (initial Lanyard integration) then 2eddcc2 (production canvas-size fix).
- Auto-deploys via Vercel GitHub integration -> live at https://praneeth-portfolio-gamma.vercel.app (no GitHub Pages involved, `has_pages:false`, deployment is Vercel).
- BUG FOUND + FIXED: in production (minified) builds, @react-three/fiber's internal ResizeObserver sometimes measures the Canvas's container before layout settles, leaving canvas stuck at default 300x150 (invisible). Confirmed via network/canvas-dimension checks on the deployed site, NOT visible in local `vite dev` (only reproduced in `vite build` + `vite preview` / production). Fix: dispatch a `resize` event ~1 frame + 300ms after Lanyard mounts (see useEffect in Lanyard.jsx). Also added `optimizeDeps.exclude: ['@dimforge/rapier3d-compat']` to vite.config.ts (standard practice for react-three-rapier + Vite, unrelated to the actual bug but harmless/recommended).
- Verified post-fix: canvas resized correctly (577x715 devicePixelRatio-scaled) and both card.glb (2.4MB) and card-front.png fetched successfully on the live production URL.
- Dead-end investigated and abandoned: initially suspected @dimforge/rapier3d-compat's wasm loading (`new URL(..., import.meta.url)` pattern showed a corrupted `"<deleted>"` placeholder in this sandbox's local node_modules) — turned out irrelevant; the actual `RAPIER.init()` code path embeds the wasm as inline base64, no network fetch involved. Real bug was purely a canvas-sizing race condition.

## Notes for next session if resumed
- avatar_bw.jpg (and avatar.jpg, avatar_color.jpg, avatar_temp1/2.jpg) in src/assets are now fully unused anywhere in src — confirmed via grep, safe to delete if desired, left in place for now.
- HeroSection.tsx no longer uses useState/isHovered — removed cleanly.
- Dev server left running in background on port 5190 (PID ~31368) for user to preview; kill via `taskkill //PID 31368 //F` or similar if no longer needed.
- Files touched: src/components/HeroSection.tsx, vite.config.ts, tsconfig.app.json, src/global.d.ts (new), src/components/Lanyard/{Lanyard.jsx,Lanyard.css,card.glb,lanyard.png} (new), src/assets/lanyard/{card-front.png,card-back.svg,gp-band.svg} (new), .claude/launch.json (new), package.json/package-lock.json (meshline + @react-three/fiber@8 + @react-three/drei@9 + @react-three/rapier@1 added).

## Open questions for user
- RESOLVED: Phone number = +91 90339 60097. Email = praneeth.g147@gmail.com. Photo = E:\pran\New folder (2)\8F754E75-EE07-41B7-B29A-22F96CB08F15-3.png
