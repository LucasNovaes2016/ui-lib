export enum CheckboxGroupSizeClasses {
  sm = 'size-4',
  lg = 'size-5',
}

export const getCheckboxGroupValueAndDisabledClasses = (
  value: boolean,
  disabled: boolean
) => {
  if (value) {
    return 'bg-violet-600 border-0';
  }
  return `bg-white border border-gray-300 ${
    disabled ? 'hover:border-gray-300' : 'hover:border-violet-800'
  }`;
};

export enum CheckboxGroupIconSizeClasses {
  sm = 'size-3',
  lg = 'size-4',
}
