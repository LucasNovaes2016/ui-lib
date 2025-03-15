import { TextareaHTMLAttributes, forwardRef } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import clsx from 'clsx';
import { ErrorMessage, ErrorMessageProps } from '../ErrorMessage';

export type TextAreaProps = {
  error?: boolean;
  message?: ErrorMessageProps['children'];
  name?: TextareaHTMLAttributes<HTMLTextAreaElement>['name'];
  id?: TextareaHTMLAttributes<HTMLTextAreaElement>['id'];
  readOnly?: TextareaHTMLAttributes<HTMLTextAreaElement>['readOnly'];
  placeholder?: TextareaHTMLAttributes<HTMLTextAreaElement>['placeholder'];
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>['rows'];
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  onChange?: TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { error, message, id, name, placeholder, readOnly, rows, value, onChange },
    ref
  ) => {
    const className = clsx(
      'shadow-sm block w-full rounded-md focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:border-gray-300 border-gray-300 text-gray-600',
      readOnly && 'bg-gray-50',
      error && 'border-red-600 focus:border-red-600'
    );

    return (
      <div className="flex flex-col gap-y-1">
        <div className="relative w-full">
          <textarea
            ref={ref}
            className={className}
            id={id}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            rows={rows}
            value={value}
            onChange={onChange}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
              <RiErrorWarningFill className="size-5 text-red-500" />
            </div>
          )}
        </div>
        {error && message && <ErrorMessage id={id}>{message}</ErrorMessage>}
      </div>
    );
  }
);
