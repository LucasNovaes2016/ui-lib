import {
  RiQuestionLine as RiQuestionLineIcon,
  RiArrowDownSLine as RiArrowDownSLineIcon,
  RiLoaderFill as RiLoaderFillIcon,
} from 'react-icons/ri';

import { SelectHTMLAttributes, forwardRef, useRef, JSX } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  Field,
  Label,
} from '@headlessui/react';

import clsx from 'clsx';
import { SelectSizeClasses } from './constants';
import { ErrorMessage } from '../ErrorMessage';
import { TooltipContainer, TooltipContainerProps } from '../TooltipContainer';
import { LabelProps } from '../Label';
import { LabelSizeClasses } from '../Label/constants';
import { Option } from './Option';
import { InputProps } from '../Input';
import { useWidth } from '../../hooks';

export type SelectGroupProps = {
  error?: boolean;
  message?: string;
  children: JSX.Element | JSX.Element[];
  placeholder?: string;
  id?: SelectHTMLAttributes<HTMLSelectElement>['id'];
  infoElement?: JSX.Element;
  infoElementPosition?: TooltipContainerProps['tooltipPosition'];
  name?: SelectHTMLAttributes<HTMLSelectElement>['name'];
  title?: LabelProps['children'];
  value?: string | number;
  isLoading?: boolean;
  disabled?: SelectHTMLAttributes<HTMLSelectElement>['disabled'];
  size?: InputProps['size'];
  noEmptyOption?: boolean;
  widthClass?: string;
  optionsAlignment?: 'start' | 'end';
  onChange?: (value: string) => void;
  onInfoClick?: () => void;
};

export const SelectGroup = forwardRef<HTMLSelectElement, SelectGroupProps>(
  (
    {
      error,
      message,
      id,
      infoElement,
      infoElementPosition,
      name,
      value,
      isLoading = false,
      disabled,
      noEmptyOption = false,
      size = 'sm',
      title,
      children,
      placeholder = 'Selecione...',
      widthClass = 'w-full',
      optionsAlignment = 'start',
      onChange,
      onInfoClick,
    },
    ref
  ) => {
    const childrenArray = Array.isArray(children) ? children : [children];

    const foundObj = childrenArray
      .filter(Boolean)
      .map((child) => child.props)
      .find((obj) => obj.value === value);

    const currentLabel = foundObj?.children || placeholder;

    const infoIcon = (
      <RiQuestionLineIcon className="size-4 cursor-pointer text-gray-600" />
    );

    const buttonStyles = clsx(
      'relative w-full cursor-pointer bg-white rounded-md shadow-sm border border-gray-300 py-2 pl-4 pr-12 text-left hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500',
      [SelectSizeClasses[size]],
      error && 'border-red-600',
      disabled && 'opacity-40 hover:bg-white',
      currentLabel === placeholder ? 'text-gray-500' : 'text-gray-600'
    );

    const buttonRef = useRef<HTMLButtonElement>(null);

    const buttonWidth = useWidth(buttonRef as React.RefObject<HTMLElement>);

    return (
      <Field>
        <div className={clsx('flex flex-col gap-y-1', widthClass)}>
          <Listbox
            value={value}
            onChange={onChange}
            disabled={disabled}
            name={name}
            ref={ref}
          >
            <div className="relative">
              {title ? (
                <div className="flex gap-x-1 items-center mb-1">
                  <Label
                    className={clsx('block font-medium text-gray-600', [
                      LabelSizeClasses[size],
                    ])}
                  >
                    {title}
                  </Label>
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
              ) : null}
              <ListboxButton className={buttonStyles} ref={buttonRef}>
                <span className="block truncate">{currentLabel}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  {isLoading ? (
                    <RiLoaderFillIcon
                      className="size-4 text-gray-500 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <RiArrowDownSLineIcon
                      className="size-4 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </ListboxButton>
              <ListboxOptions
                className={clsx(
                  'absolute mt-1 max-h-[330px] overflow-auto rounded-md bg-white py-1 text-base shadow-md focus:outline-none z-50',
                  buttonWidth < 256 ? 'min-w-full max-w-[256px]' : 'w-full',
                  {
                    'left-0': optionsAlignment === 'start',
                    'right-0': optionsAlignment === 'end',
                  }
                )}
                id={id}
              >
                {!noEmptyOption && <Option value="">{placeholder}</Option>}
                {children}
              </ListboxOptions>
            </div>
          </Listbox>
          {error && message && <ErrorMessage id={id}>{message}</ErrorMessage>}
        </div>
      </Field>
    );
  }
);
