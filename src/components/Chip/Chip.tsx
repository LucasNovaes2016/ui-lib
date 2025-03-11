import {
  RiAddFill as RiAddFillIcon,
  RiCheckboxBlankCircleFill as RiCheckboxBlankCircleFillIcon,
  RiCloseLine as RiCloseLineIcon,
  RiLoader4Line as RiLoader4LineIcon,
} from 'react-icons/ri';

import { ReactNode } from 'react';
import clsx from 'clsx';

import { ChipColor, ChipSize, ChipVariant } from './types';
import {
  ChipBackgroundColorClasses,
  ChipBorderColorClasses,
  ChipSizeClasses,
  ChipTextColorClasses,
  ChipTextPrefixColorClasses,
} from './constants';

export type ChipProps = {
  children: ReactNode;
  size?: ChipSize;
  color?: ChipColor;
  variant?: ChipVariant;
  isStatus?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onDelete?: () => void;
  onAdd?: () => void;
};

export const Chip = ({
  children,
  color = 'purple',
  size = 'sm',
  variant = 'filled',
  isStatus = false,
  isLoading,
  disabled = false,
  className,
  onDelete,
  onAdd,
}: ChipProps) => {
  const hasRightIcon = !!(onDelete || onAdd || isLoading);

  const styles = clsx(
    'flex items-center gap-x-1 inline-block w-fit rounded-[20px]',
    [
      ChipTextColorClasses[color],
      ChipSizeClasses[size],
      variant === 'filled'
        ? ChipBackgroundColorClasses[color]
        : ChipBorderColorClasses[color],
      hasRightIcon &&
        'border border-violet-200 focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-violet-500',
      disabled && 'opacity-40',
    ],
    className
  );

  return (
    <div className={styles}>
      {isStatus && (
        <RiCheckboxBlankCircleFillIcon
          className={clsx('size-2', ChipTextPrefixColorClasses[color])}
        />
      )}
      {children}
      {isLoading ? (
        <RiLoader4LineIcon
          className={clsx(
            'size-4 animate-spin flex',
            ChipTextColorClasses[color]
          )}
        />
      ) : onDelete ? (
        <button
          className="outline-0 flex"
          onClick={onDelete}
          disabled={disabled}
          type="button"
        >
          <RiCloseLineIcon
            className={clsx('size-4', ChipTextColorClasses[color])}
          />
        </button>
      ) : onAdd ? (
        <button
          className="outline-0 flex"
          onClick={onAdd}
          disabled={disabled}
          type="button"
        >
          <RiAddFillIcon
            className={clsx('size-4', ChipTextColorClasses[color])}
          />
        </button>
      ) : null}
    </div>
  );
};
