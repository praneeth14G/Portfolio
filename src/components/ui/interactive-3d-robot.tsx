'use client';

import { Suspense, lazy, useEffect, useRef } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const removeWatermarkGlobal = () => {
      // 1. Scan the entire document for any anchors pointing to spline or matching the watermark style
      const anchors = document.querySelectorAll('a');
      anchors.forEach((a) => {
        const href = a.getAttribute('href') || '';
        const ariaLabel = a.getAttribute('aria-label') || '';
        const innerText = a.innerText || '';
        
        if (
          href.includes('spline') || 
          href.includes('spline.design') ||
          ariaLabel.toLowerCase().includes('spline') || 
          innerText.toLowerCase().includes('spline') ||
          a.id === 'logo' ||
          a.className.includes('spline')
        ) {
          a.style.setProperty('display', 'none', 'important');
          a.style.setProperty('visibility', 'hidden', 'important');
          a.style.setProperty('opacity', '0', 'important');
          a.style.setProperty('pointer-events', 'none', 'important');
          a.style.setProperty('width', '0px', 'important');
          a.style.setProperty('height', '0px', 'important');
          a.style.setProperty('position', 'absolute', 'important');
          a.style.setProperty('z-index', '-9999', 'important');
        }
      });

      // 2. Check for shadow roots of spline-viewer or custom components in case they are used
      const splineViewers = document.querySelectorAll('spline-viewer');
      splineViewers.forEach((viewer: any) => {
        if (viewer.shadowRoot) {
          const logo = viewer.shadowRoot.getElementById('logo') || 
                       viewer.shadowRoot.querySelector('a') ||
                       viewer.shadowRoot.querySelector('[class*="logo"]') ||
                       viewer.shadowRoot.querySelector('[class*="watermark"]');
          if (logo) {
            logo.style.setProperty('display', 'none', 'important');
            logo.style.setProperty('visibility', 'hidden', 'important');
            logo.style.setProperty('opacity', '0', 'important');
          }
          // Inject a stylesheet directly inside the shadow root to permanently hide the branding
          if (!viewer.shadowRoot.querySelector('#hide-spline-style')) {
            const style = document.createElement('style');
            style.id = 'hide-spline-style';
            style.textContent = `
              a, #logo, [id*="logo"], [class*="logo"], [class*="watermark"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
              }
            `;
            viewer.shadowRoot.appendChild(style);
          }
        }
      });
    };

    // Run the cleaner immediately
    removeWatermarkGlobal();

    // Check periodically to catch elements loaded after initial canvas render
    const interval = setInterval(removeWatermarkGlobal, 200);

    // Watch DOM changes globally to remove watermarks the millisecond they are added
    const observer = new MutationObserver(removeWatermarkGlobal);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <Suspense
        fallback={
          <div className={`w-full h-full flex items-center justify-center bg-[#0C0C0C] text-white ${className || ""}`}>
            <svg className="animate-spin h-8 w-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>

      {/* Expanded Failsafe cover: opaque block over the bottom-right corner to physically mask the watermark area */}
      <div className="absolute bottom-0 right-0 w-[240px] h-[70px] bg-[#0C0C0C] z-50 pointer-events-none" />
    </div>
  );
}

export default InteractiveRobotSpline;
