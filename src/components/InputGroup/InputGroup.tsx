import { forwardRef, JSX } from 'react';

import { Input, InputProps } from '../Input';
import { Label, LabelProps } from '../Label';
import { TooltipContainerProps } from '../TooltipContainer';

export type InputGroupProps = {
  size?: InputProps['size'];
  disabled?: InputProps['disabled'];
  error?: InputProps['error'];
  id?: InputProps['id'];
  infoElement?: JSX.Element;
  infoElementPosition?: TooltipContainerProps['tooltipPosition'];
  maxLength?: InputProps['maxLength'];
  message?: InputProps['message'];
  name?: InputProps['name'];
  placeholder?: InputProps['placeholder'];
  prefixText?: InputProps['prefixText'];
  suffixText?: InputProps['suffixText'];
  title?: LabelProps['children'];
  type?: InputProps['type'];
  uppercase?: boolean;
  value?: InputProps['value'];
  defaultValue?: InputProps['defaultValue'];
  widthClass?: InputProps['widthClass'];
  onChange?: InputProps['onChange'];
  onKeyPress?: InputProps['onKeyPress'];
  onBlur?: InputProps['onBlur'];
  onFocus?: InputProps['onFocus'];
  onInput?: InputProps['onInput'];
};

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (
    {
      size,
      disabled,
      error,
      id,
      infoElement,
      infoElementPosition,
      maxLength,
      message,
      name,
      prefixText,
      suffixText,
      placeholder,
      title,
      type,
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
  ) => (
    <div className="flex flex-col gap-y-1">
      <Label
        htmlFor={id}
        infoElement={infoElement}
        infoElementPosition={infoElementPosition}
        size={size}
      >
        {title}
      </Label>
      <Input
        size={size}
        disabled={disabled}
        error={error}
        id={id}
        maxLength={maxLength}
        message={message}
        name={name}
        placeholder={placeholder}
        prefixText={prefixText}
        suffixText={suffixText}
        ref={ref}
        type={type}
        value={value}
        defaultValue={defaultValue}
        widthClass={widthClass}
        uppercase={uppercase}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onFocus={onFocus}
        onInput={onInput}
      />
    </div>
  )
);
