import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { RiForbid2Line } from 'react-icons/ri';
import {
  getRadioActiveClasses,
  getRadioLabelAndValueGapClasses,
  RadioCheckedClasses,
  RadioDisabledClasses,
  RadioIconSizeClasses,
  RadioLabelSizeClasses,
  RadioSizeClasses,
} from './constants';

export type RadioProps = {
  id?: string;
  label?: string;
  size?: 'sm' | 'lg';
  value: string;
};

export const Radio = ({ id, label, size = 'sm', value }: RadioProps) => (
  <RadioGroup.Option
    value={value}
    className={clsx('focus:outline-none cursor-pointer group')}
    id={id}
  >
    {({ checked, disabled }) => (
      <div
        className={clsx(
          'flex items-center',
          getRadioLabelAndValueGapClasses(size, disabled)
        )}
      >
        <div className="relative">
          <div
            className={clsx(
              'inline-block rounded-full border',
              getRadioActiveClasses(disabled),
              [RadioDisabledClasses[`${disabled}`]],
              [RadioCheckedClasses[`${checked}`]],
              [RadioSizeClasses[size]]
            )}
          />
          {disabled && (
            <RiForbid2Line
              className={clsx('text-red-700 absolute h-[14px] w-[14px]', [
                RadioIconSizeClasses[size],
              ])}
            />
          )}
        </div>
        {label ? (
          <RadioGroup.Label
            className={clsx('text-gray-500', [RadioLabelSizeClasses[size]])}
          >
            {label}
          </RadioGroup.Label>
        ) : null}
      </div>
    )}
  </RadioGroup.Option>
);
