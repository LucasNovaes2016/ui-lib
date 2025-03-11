import { ReactNode } from 'react';
import { Chip, ChipProps } from '../Chip';

export type BadgeProps = {
  children: ReactNode;
  size?: ChipProps['size'];
  color?: ChipProps['color'];
  variant?: ChipProps['variant'];
  isStatus?: boolean;
  className?: string;
};

export const Badge = ({ color = 'gray', ...props }: BadgeProps) => (
  <Chip color={color} {...props} />
);
