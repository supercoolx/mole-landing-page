import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  className?: string;
  iconClassName?: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  color = 'bg-white',
  className = '',
  iconClassName = '',
  image,
}) => {
  return (
    <div className={cn(
      `${color} relative p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300`,
      className
    )}>
      <div className="absolute">
        <img src={cn(`${image}`)} alt="" className="w-16" />
      </div>
      <div className={cn("flex justify-center mb-4", iconClassName)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;