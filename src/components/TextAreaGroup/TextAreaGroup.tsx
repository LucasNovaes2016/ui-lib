import { forwardRef, JSX } from 'react';
import { LabelProps } from '../Label';
import { TextArea, TextAreaProps } from '../TextArea';
import { TooltipContainerProps } from '../TooltipContainer';
import { InputProps } from '../Input';
import { Label } from '../Label';

export type TextAreaGroupProps = {
  error?: TextAreaProps['error'];
  id?: TextAreaProps['id'];
  size?: InputProps['size'];
  infoElement?: JSX.Element;
  infoElementPosition?: TooltipContainerProps['tooltipPosition'];
  message?: TextAreaProps['message'];
  name?: TextAreaProps['name'];
  onChange?: TextAreaProps['onChange'];
  readOnly?: TextAreaProps['readOnly'];
  rows?: TextAreaProps['rows'];
  title?: LabelProps['children'];
  value?: TextAreaProps['value'];
  placeholder?: TextAreaProps['placeholder'];
};

export const TextAreaGroup = forwardRef<
  HTMLTextAreaElement,
  TextAreaGroupProps
>(
  (
    {
      error,
      id,
      size = 'sm',
      infoElement,
      infoElementPosition,
      message,
      name,
      onChange,
      readOnly,
      rows,
      title,
      value,
      placeholder,
    },
    ref
  ) => (
    <div className="space-y-1">
      <Label
        htmlFor={id}
        infoElement={infoElement}
        infoElementPosition={infoElementPosition}
        size={size}
      >
        {title}
      </Label>
      <TextArea
        ref={ref}
        error={error}
        id={id}
        message={message}
        name={name}
        readOnly={readOnly}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
);
