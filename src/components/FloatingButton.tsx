import { useState } from "react";
import perspectivLogo from "@/assets/new-perspectiv-logo.png";

interface FloatingButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const FloatingButton = ({ onClick, isActive }: FloatingButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 
        w-16 h-16 rounded-full
        shadow-[0_0_30px_rgba(139,92,246,0.3)]
        ${isActive ? 'scale-110 transition-transform duration-300' : isHovered ? 'scale-110 transition-transform duration-300' : 'animate-breathing'}
      `}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative w-full h-full rounded-full p-0 overflow-hidden
          shadow-lg hover:shadow-2xl
          ${isHovered ? 'brightness-110' : 'brightness-100'}
          transition-[filter,box-shadow] duration-300
        `}
        aria-label="Open Perspectiv panel"
      >
        <img 
          src={perspectivLogo} 
          alt="Perspectiv" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};
