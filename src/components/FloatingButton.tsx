import { useState } from "react";
import perspectivLogo from "@/assets/perspectiv-logo.png";

interface FloatingButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const FloatingButton = ({ onClick, isActive }: FloatingButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50 
        w-16 h-16 rounded-full p-0 overflow-hidden
        shadow-lg hover:shadow-2xl
        ${isActive ? 'scale-110 ring-4 ring-accent/50 transition-all duration-300' : isHovered ? 'scale-110 transition-transform duration-300' : ''}
        ${isHovered ? 'brightness-110' : 'brightness-100'}
        border-2 border-transparent hover:border-accent/60
        transition-[filter,border-color,box-shadow] duration-300
      `}
      aria-label="Open Perspectiv panel"
    >
      <img 
        src={perspectivLogo} 
        alt="Perspectiv" 
        className="w-full h-full object-cover"
      />
    </button>
  );
};
