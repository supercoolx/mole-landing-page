import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface GameButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'accent' | 'yellow';
  size?: 'sm' | 'default' | 'lg' | 'xl';
  className?: string;
}

const GameButton: React.FC<GameButtonProps> = ({ 
  children, 
  onClick, 
  color = 'primary',
  size = 'default',
  className = '' 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const getColorClasses = () => {
    switch (color) {
      case 'secondary':
        return 'bg-game-red hover:bg-game-red/80';
      case 'accent':
        return 'bg-game-green hover:bg-game-green/80';
      case 'yellow':
        return 'bg-game-yellow hover:bg-game-yellow/80 text-black';
      default:
        return 'bg-game-blue hover:bg-game-blue/80';
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-1';
      case 'lg':
        return 'text-xl px-8 py-3';
      case 'xl':
        return 'text-2xl px-10 py-4';
      default:
        return 'text-base px-6 py-2';
    }
  };
  
  const handleClick = () => {
    setIsPressed(true);
    onClick?.();
    setTimeout(() => setIsPressed(false), 200);
  };
  
  return (
    <Button 
      onClick={handleClick}
      className={`
        rounded-xl font-bold transition-all
        border-b-4 border-black/20
        ${getColorClasses()}
        ${getSizeClasses()}
        ${isPressed ? 'transform translate-y-1 border-b-2' : ''}
        ${className}
      `}
    >
      {children}
    </Button>
  );
};

export default GameButton;