import { useState, useEffect } from 'react';

interface MoleProps {
  delay?: number;
  duration?: number;
}

export const Mole: React.FC<MoleProps> = ({ delay = 0, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setVisible(true);
      
      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, duration);
      
      return () => clearTimeout(hideTimeout);
    }, delay);
    
    return () => clearTimeout(showTimeout);
  }, [delay, duration]);
  
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24">
      <div 
        className={`absolute bottom-0 w-full h-full transition-transform duration-300 ${
          visible ? 'translate-y-0 animate-mole-pop' : 'translate-y-full'
        }`}
      >
        <div className="w-full h-3/4 bg-gradient-to-b from-brown-500 to-brown-700 rounded-t-full relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute top-0 w-full h-2/3 bg-brown-400 rounded-full">
                <div className="absolute left-1/4 top-1/4 w-1/5 h-1/5 bg-black rounded-full"></div>
                <div className="absolute right-1/4 top-1/4 w-1/5 h-1/5 bg-black rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-2/5 h-1/5 bg-game-red rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mole;