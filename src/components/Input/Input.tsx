import { forwardRef, InputHTMLAttributes, useRef } from 'react';
import clsx from 'clsx';

import { mergeRefs } from 'react-merge-refs';
import { InputSizeClasses } from './constants';
import { InputSize } from './types';
import { ErrorMessage } from '../ErrorMessage';

export type InputProps = {
  size?: InputSize;
  disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
  error?: boolean;
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  maxLength?: InputHTMLAttributes<HTMLInputElement>['maxLength'];
  message?: string;
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  prefixText?: string;
  suffixText?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  uppercase?: boolean;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  defaultValue?: InputHTMLAttributes<HTMLInputElement>['defaultValue'];
  widthClass?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onKeyPress?: InputHTMLAttributes<HTMLInputElement>['onKeyPress'];
  onBlur?: InputHTMLAttributes<HTMLInputElement>['onBlur'];
  onFocus?: InputHTMLAttributes<HTMLInputElement>['onFocus'];
  onInput?: InputHTMLAttributes<HTMLInputElement>['onInput'];
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'sm',
      disabled = false,
      error,
      id,
      maxLength,
      message,
      name,
      placeholder,
      prefixText,
      suffixText,
      type = 'text',
      uppercase,
      value,
      defaultValue,
      widthClass,
      onChange,
      onKeyPress,
      onBlur,
      onFocus,
      onInput,
    },
    ref
  ) => {
    const inputWrapperStyles = clsx(
      'bg-white rounded-md shadow-sm border border-gray-300 flex items-center gap-x-2 cursor-text px-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-violet-500',
      error && 'border-red-600',
      widthClass ? widthClass : 'w-full',
      disabled && 'opacity-40'
    );
    const inputStyles = clsx(
      'rounded-md focus:ring-0 focus:outline-none border-0 w-full px-0 text-gray-600 bg-clip-text',
      { uppercase },
      [InputSizeClasses[size]]
    );

    const localInputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = () =>
      localInputRef.current && localInputRef.current.focus();

    return (
      <div className="flex flex-col gap-y-1">
        <div
          className={inputWrapperStyles}
          onClick={handleInputFocus}
          onKeyDown={() => null}
        >
          {prefixText && (
            <span className={clsx('text-gray-600', [InputSizeClasses[size]])}>
              {prefixText}
            </span>
          )}
          <input
            className={inputStyles}
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            ref={mergeRefs([localInputRef, ref])}
            type={type}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onBlur={onBlur}
            onFocus={onFocus}
            onInput={onInput}
          />
          {suffixText && (
            <span className={clsx('text-gray-600', [InputSizeClasses[size]])}>
              {suffixText}
            </span>
          )}
        </div>
        {error && message && <ErrorMessage id={id}>{message}</ErrorMessage>}
      </div>
    );
  }
);
