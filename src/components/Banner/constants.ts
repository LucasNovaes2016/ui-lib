import { BannerColor, BannerVariant } from './types';

const borderClasses = {
  gray: 'border border-gray-200',
  yellow: 'border border-amber-200',
  green: 'border border-green-200',
  red: 'border border-red-200',
};

const filledBackgroundClasses = {
  gray: 'bg-gray-50',
  yellow: 'bg-amber-50',
  green: 'bg-green-50',
  red: 'bg-red-50',
};

export const getBannerColorAndVariantClasses = (
  color: BannerColor,
  variant: BannerVariant
): string => {
  const borderClass = borderClasses[color];
  const bgClass =
    variant === 'filled' ? filledBackgroundClasses[color] : 'bg-white';

  return `${borderClass} ${bgClass}`;
};
