export enum RadioSizeClasses {
  sm = 'size-4 -mb-0.5',
  lg = 'size-5 -mb-1',
}

export enum RadioCheckedClasses {
  true = 'border-4 border-violet-600',
  false = 'border-gray-300',
}

export enum RadioDisabledClasses {
  true = 'opacity-40',
  false = 'hover:border-violet-800',
}

export const getRadioActiveClasses = (disabled: boolean) => {
  if (!disabled) {
    return 'group-focus:ring-1 group-focus:ring-offset-2 group-focus:ring-violet-500';
  }
  return '';
};

export const getRadioLabelAndValueGapClasses = (
  size: string,
  disabled: boolean
) => {
  if (size === 'sm' && !disabled) return 'gap-x-1';
  if (size === 'sm' && disabled) return 'gap-x-3.5';
  if (size === 'lg' && !disabled) return 'gap-x-2';
  return 'gap-x-[18px]';
};

export enum RadioLabelSizeClasses {
  sm = 'text-xs font-medium leading-5',
  lg = 'text-sm font-medium leading-5',
}

export enum RadioIconSizeClasses {
  sm = '-mt-[13px] ml-3',
  lg = '-mt-[14px] ml-4',
}
