import { LabelHTMLAttributes, JSX } from 'react';
import { RiQuestionLine } from 'react-icons/ri';
import clsx from 'clsx';
import { TooltipContainer, TooltipContainerProps } from '../TooltipContainer';
import { InputSize } from '../Input/types';
import { LabelSizeClasses } from './constants';

export type LabelProps = {
  children: string;
  htmlFor?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
  infoElement?: JSX.Element | JSX.Element[];
  infoElementPosition?: TooltipContainerProps['tooltipPosition'];
  size?: InputSize;
  onInfoClick?: () => void;
};

export const Label = ({
  size = 'sm',
  children,
  htmlFor,
  infoElement,
  infoElementPosition,
  onInfoClick,
}: LabelProps) => {
  const infoIcon = (
    <RiQuestionLine className="size-4 cursor-pointer text-gray-600" />
  );

  return (
    <div className="flex gap-x-1 items-center">
      <label
        htmlFor={htmlFor}
        className={clsx('block font-medium text-gray-600', [
          LabelSizeClasses[size],
        ])}
      >
        {children}
      </label>
      {infoElement ? (
        <TooltipContainer
          content={infoElement}
          tooltipPosition={infoElementPosition}
        >
          {onInfoClick ? (
            <button
              className="h-full flex items-center"
              onClick={onInfoClick}
              type="button"
            >
              {infoIcon}
            </button>
          ) : (
            infoIcon
          )}
        </TooltipContainer>
      ) : null}
    </div>
  );
};
