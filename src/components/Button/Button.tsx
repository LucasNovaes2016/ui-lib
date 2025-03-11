import { ButtonHTMLAttributes, cloneElement, forwardRef, JSX } from 'react';
import { RiLoader4Fill as RiLoader4FillIcon } from 'react-icons/ri';
import clsx from 'clsx';

import {
  ButtonSizeClasses,
  ButtonColorClasses,
  ButtonIconColorClasses,
  ButtonValidClasses,
} from './constants';
import { ButtonColor, ButtonSize } from './types';

export type ButtonProps = {
  children?: ButtonHTMLAttributes<HTMLButtonElement>['children'];
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  color?: ButtonColor;
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
  showDisabledSpinner?: boolean;
  applyDisabledOpacity?: boolean;
  size?: ButtonSize;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  uppercase?: boolean;
  title?: ButtonHTMLAttributes<HTMLButtonElement>['title'];
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  valid?: boolean;
  removeFocusClasses?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
};

export const Button = forwardRef(
  (
    {
      className,
      children = null,
      color = 'primary',
      disabled = false,
      showDisabledSpinner = false,
      applyDisabledOpacity = true,
      onClick,
      size = 'sm',
      type = 'button',
      uppercase = false,
      title,
      leftIcon,
      rightIcon,
      valid = true,
      removeFocusClasses = false,
    }: ButtonProps,
    ref: any
  ) => {
    const isOnlyIcon = !!((leftIcon || rightIcon) && !children);

    const styles = clsx(
      'rounded relative',
      {
        'focus:outline-none focus:ring-2 focus:ring-offset-2':
          !removeFocusClasses,
      },
      [
        ButtonColorClasses[color],
        ButtonSizeClasses[`${isOnlyIcon ? 'only-icon' : 'standard'}-${size}`],
        ButtonValidClasses[valid.toString() as 'true' | 'false'],
        disabled && 'cursor-auto',
        disabled && applyDisabledOpacity && 'opacity-40',
        uppercase && 'tracking-wide uppercase',
      ],
      className
    );

    const LeftIcon = leftIcon
      ? cloneElement(leftIcon, {
          className: clsx('size-4', ButtonIconColorClasses[color]),
        })
      : null;

    const RightIcon = rightIcon
      ? cloneElement(rightIcon, {
          className: clsx('size-4', ButtonIconColorClasses[color]),
        })
      : null;

    return (
      <button
        ref={ref}
        className={styles}
        disabled={disabled}
        onClick={onClick}
        type={type}
        title={title}
      >
        {disabled && showDisabledSpinner && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-0.5">
            <RiLoader4FillIcon
              className={clsx(
                'size-4 animate-spin',
                ButtonIconColorClasses[color]
              )}
            />
          </div>
        )}
        <div
          className={clsx('flex justify-center items-center gap-x-1', {
            invisible: disabled && showDisabledSpinner,
          })}
        >
          {LeftIcon}
          {children}
          {RightIcon}
        </div>
      </button>
    );
  }
);
