import clsx from 'clsx';
import { Checkbox, Description, Field, Label } from '@headlessui/react';

import { RiCheckFill, RiForbid2Line } from 'react-icons/ri';
import { forwardRef, ReactNode } from 'react';
import {
  CheckboxGroupIconSizeClasses,
  CheckboxGroupSizeClasses,
  getCheckboxGroupValueAndDisabledClasses,
} from './constants';

export type CheckboxGroupProps = {
  checked: boolean;
  disabled?: boolean;
  title?: ReactNode;
  description?: string;
  name?: string;
  id?: string;
  defaultChecked?: boolean;
  size?: 'sm' | 'lg';
  onChange?: (checked: boolean) => void;
  onSpaceBarKeyDown?: () => void;
  onClick?: () => void;
};

export const CheckboxGroup = forwardRef<HTMLButtonElement, CheckboxGroupProps>(
  (
    {
      checked,
      title,
      description,
      name,
      id,
      defaultChecked,
      size = 'sm',
      disabled = false,
      onChange,
      onSpaceBarKeyDown,
      onClick,
    },
    ref
  ) => (
    <Field>
      <div className="flex gap-x-2 items-center">
        <div className="relative">
          <Checkbox
            id={id}
            ref={ref}
            name={name}
            defaultChecked={defaultChecked}
            checked={checked}
            onChange={onChange}
            onKeyDown={(e) =>
              e.key === ' ' ? onSpaceBarKeyDown && onSpaceBarKeyDown() : null
            }
            onClick={onClick}
            disabled={disabled}
            className={clsx(
              'rounded focus:ring-1 focus:ring-offset-2 focus:ring-violet-500 outline-none flex justify-center items-center cursor-pointer',
              CheckboxGroupSizeClasses[size],
              getCheckboxGroupValueAndDisabledClasses(checked, disabled),
              disabled && 'opacity-40 cursor-auto'
            )}
          >
            {checked && (
              <RiCheckFill
                className={clsx(
                  'text-white',
                  CheckboxGroupIconSizeClasses[size]
                )}
              />
            )}
          </Checkbox>
          {disabled && (
            <RiForbid2Line
              className={clsx(
                'text-red-700 absolute -mt-[3px] ml-[9px]',
                CheckboxGroupIconSizeClasses[size]
              )}
            />
          )}
        </div>
        {(title || description) && (
          <div className="flex flex-col">
            {title && (
              <Label className="text-sm font-medium text-gray-700">
                {title}
              </Label>
            )}
            {description && (
              <Description className="text-sm text-gray-500">
                {description}
              </Description>
            )}
          </div>
        )}
      </div>
    </Field>
  )
);
