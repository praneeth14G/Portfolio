import React from 'react';

interface LiveProjectButtonProps {
  url?: string;
  onClick?: () => void;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ url, onClick, label = 'Live Project' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 focus:outline-none"
    >
      {label}
    </button>
  );
};
