import React from 'react';

interface RobustMuscleLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RobustMuscleLogo: React.FC<RobustMuscleLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'text-base sm:text-lg tracking-tight'
      : size === 'lg'
      ? 'text-2xl sm:text-3xl tracking-tight'
      : size === 'xl'
      ? 'text-3xl sm:text-4xl tracking-tighter'
      : 'text-xl sm:text-2xl tracking-tight';

  return (
    <span
      className={`font-black uppercase italic text-[#FFC700] select-none hover:text-white transition-colors duration-200 ${sizeClasses} ${className}`}
    >
      Robust Muscle
    </span>
  );
};
