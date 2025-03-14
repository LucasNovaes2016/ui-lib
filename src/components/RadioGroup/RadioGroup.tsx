import { JSX } from 'react';

import { Label, RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { RiQuestionLine as RiQuestionLineIcon } from 'react-icons/ri';
import { ErrorMessage } from '../ErrorMessage';
import { TooltipContainer, TooltipContainerProps } from '../TooltipContainer';

export type RadioGroupProps = {
  children: JSX.Element | JSX.Element[];
  disabled?: boolean;
  error?: boolean;
  id?: string;
  infoElement?: JSX.Element;
  infoElementPosition?: TooltipContainerProps['tooltipPosition'];
  infoElementClassName?: TooltipContainerProps['tooltipClassName'];
  title?: string;
  message?: string;
  name?: string;
  value: string;
  onChange?: (value: string) => void;
  onInfoClick?: () => void;
};
export const RadioGroup = ({
  children,
  disabled = false,
  error = false,
  id,
  infoElement,
  infoElementPosition,
  infoElementClassName,
  title,
  message,
  name,
  value,
  onChange,
  onInfoClick,
}: RadioGroupProps) => (
  <div className="flex flex-col">
    <HeadlessRadioGroup
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      disabled={disabled}
    >
      <div className="flex flex-col gap-y-1">
        {title && (
          <div className="flex gap-x-1 items-center">
            <Label className="block font-medium text-gray-600 text-sm leading-5">
              {title}
            </Label>
            {infoElement ? (
              <TooltipContainer
                content={infoElement}
                tooltipPosition={infoElementPosition}
                tooltipClassName={infoElementClassName}
              >
                <button
                  className="h-full flex items-center"
                  onClick={onInfoClick}
                  type="button"
                >
                  <RiQuestionLineIcon className="size-4 cursor-pointer text-gray-600" />
                </button>
              </TooltipContainer>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </HeadlessRadioGroup>
    {error && message && <ErrorMessage id={id}>{message}</ErrorMessage>}
  </div>
);
