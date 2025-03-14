import { ListboxOption } from '@headlessui/react';

export type OptionProps = {
  value: string | number;
  children: string;
};

export const Option = ({ value, children }: OptionProps) => (
  <ListboxOption
    key={value}
    className="relative cursor-default select-none py-2 px-4 text-gray-600 text-sm data-[focus]:bg-violet-50 block truncate font-normal"
    value={value}
  >
    {children}
  </ListboxOption>
);
