import clsx from 'clsx';
import { cloneElement, JSX } from 'react';
import {
  RiSearchLine,
  RiErrorWarningLine,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import { EmptyStateSize, EmptyStateType } from './types';
import { Button, ButtonProps } from '../Button';

const typeToIcon = {
  empty: <RiSearchLine />,
  error: <RiErrorWarningLine />,
  resolved: <RiCheckboxCircleLine />,
};

export type EmptyStateProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  size?: EmptyStateSize;
  type?: EmptyStateType;
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  className?: string;
};

export const EmptyState = ({
  title,
  description,
  icon,
  size = 'md',
  type = 'empty',
  primaryAction,
  secondaryAction,
  className,
}: EmptyStateProps) => {
  const Icon = cloneElement(icon ?? typeToIcon[type], {
    className: clsx({
      'text-violet-600': type === 'empty',
      'text-red-600': type === 'error',
      'text-green-600': type === 'resolved',
      'size-4': size === 'xs',
      'size-6': size === 'sm',
      'size-8': size === 'md',
      'size-10': size === 'lg',
    }),
  });

  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          'flex flex-col justify-center items-center',
          {
            'max-w-[360px]': size === 'sm' || size === 'xs',
            'max-w-[392px]': size === 'md' || size === 'lg',
          },
          className
        )}
      >
        <div
          className={clsx('rounded-full flex justify-center items-center', {
            'bg-violet-100': type === 'empty',
            'bg-red-100': type === 'error',
            'bg-green-100': type === 'resolved',
            'size-6': size === 'xs',
            'size-8': size === 'sm',
            'size-12': size === 'md',
            'size-14': size === 'lg',
          })}
        >
          {Icon}
        </div>
        <h2
          className={clsx('mt-4 text-center text-gray-700 font-semibold', {
            'text-sm': size === 'xs',
            'text-base leading-5': size === 'sm',
            'text-lg leading-6': size === 'md',
            'text-2xl': size === 'lg',
          })}
        >
          {title}
        </h2>
        <h3
          className={clsx('mt-1 text-center text-gray-600 font-normal', {
            'text-sm': size === 'xs' || size === 'sm',
            'text-base': size === 'md' || size === 'lg',
          })}
        >
          {description}
        </h3>
        {primaryAction ? (
          <div className="mt-4 flex justify-center items-center gap-x-2">
            {secondaryAction ? <Button {...secondaryAction} /> : null}
            <Button {...primaryAction} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
