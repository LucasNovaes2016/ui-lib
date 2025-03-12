import clsx from 'clsx';
import {
  RiCloseFill as RiCloseFillIcon,
  RiInformationFill as RiInformationFillIcon,
} from 'react-icons/ri';
import { cloneElement, ReactNode, JSX } from 'react';
import {
  BannerActionButtonsPosition,
  BannerColor,
  BannerVariant,
} from './types';
import { getBannerColorAndVariantClasses } from './constants';
import { ButtonColor } from '../Button/types';
import { Button } from '../Button';

export type BannerProps = {
  color?: BannerColor;
  icon?: JSX.Element;
  title: ReactNode;
  children?: React.ReactNode;
  variant?: BannerVariant;
  actionButtonsPosition?: BannerActionButtonsPosition;
  primaryActionText?: string;
  primaryActionColor?: ButtonColor;
  secondaryActionText?: string;
  secondaryActionColor?: ButtonColor;
  onPrimaryActionClick?: () => void;
  onSecondaryActionClick?: () => void;
  onClose?: () => void;
};

export const Banner = ({
  color = 'gray',
  icon = <RiInformationFillIcon />,
  title,
  children,
  variant = 'filled',
  actionButtonsPosition = 'right',
  primaryActionText,
  primaryActionColor = 'primary',
  secondaryActionText,
  secondaryActionColor = 'secondary',
  onSecondaryActionClick,
  onPrimaryActionClick,
  onClose,
}: BannerProps) => {
  const BannerIcon = cloneElement(icon, {
    className: clsx('size-4', {
      'text-violet-500': color === 'gray',
      'text-amber-500': color === 'yellow',
      'text-green-500': color === 'green',
      'text-red-500': color === 'red',
    }),
  });

  const hasExtraContent = !!primaryActionText || !!secondaryActionText;

  const actionButtonsContent = (
    <div className="flex gap-x-2">
      {!!secondaryActionText && (
        <Button
          color={secondaryActionColor}
          onClick={onSecondaryActionClick}
          type="button"
        >
          {secondaryActionText}
        </Button>
      )}
      {!!primaryActionText && (
        <Button
          color={primaryActionColor}
          onClick={onPrimaryActionClick}
          type="button"
        >
          {primaryActionText}
        </Button>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        'rounded',
        getBannerColorAndVariantClasses(color, variant),
        actionButtonsPosition === 'bottom' ? 'py-4' : 'py-2',
        hasExtraContent ? 'px-4' : 'px-2'
      )}
    >
      <div
        className={clsx('flex justify-between gap-x-6', {
          'items-start': actionButtonsPosition === 'bottom',
          'items-center': actionButtonsPosition === 'right',
        })}
      >
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <div className="flex-1 flex justify-center gap-x-2">
              <div className="flex items-center">{BannerIcon}</div>
              <div className="flex-1 flex items-center text-sm text-gray-600 font-normal">
                {title}
              </div>
            </div>
            {actionButtonsPosition === 'right' &&
              !!(primaryActionText || secondaryActionText) &&
              actionButtonsContent}
          </div>
          {children}
          {actionButtonsPosition === 'bottom' &&
            !!(primaryActionText || secondaryActionText) && (
              <div className="self-end">{actionButtonsContent}</div>
            )}
        </div>
        {onClose ? (
          <button onClick={onClose} type="button">
            <RiCloseFillIcon className="size-4 text-gray-700" />
          </button>
        ) : null}
      </div>
    </div>
  );
};
