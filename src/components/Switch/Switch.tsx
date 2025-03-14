import clsx from 'clsx';
import { Switch as HeadlessSwitch } from '@headlessui/react';

export type SwitchProps = {
  value: boolean;
  disabled?: boolean;
  description?: string;
  onToggle?: () => void;
  onSpaceBarKeyDown?: () => void;
  onClick?: () => void;
};

export const Switch = ({
  value,
  description,
  disabled,
  onToggle,
  onSpaceBarKeyDown,
  onClick,
}: SwitchProps) => (
  <HeadlessSwitch
    checked={value}
    onChange={onToggle}
    onKeyDown={(e) =>
      e.key === ' ' ? onSpaceBarKeyDown && onSpaceBarKeyDown() : null
    }
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      'relative inline-flex h-4 w-9 shrink-0 cursor-pointer rounded-xl transition-colors duration-200 ease-in-out focus:ring-1 focus:ring-offset-4 focus:ring-violet-500',
      {
        'bg-violet-600 hover:bg-violet-500': value,
        'bg-gray-200 hover:bg-gray-300': !value,
        'opacity-40 pointer-events-none': disabled,
      }
    )}
  >
    <span className="sr-only">{description}</span>
    <span
      aria-hidden="true"
      className={`${value ? 'translate-x-[18px]' : 'translate-x-[-2px]'}
    absolute -top-[2px] pointer-events-none inline-block size-5 border-[1px] boder-gray-200 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
    />
  </HeadlessSwitch>
);
