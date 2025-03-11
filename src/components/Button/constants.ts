export enum ButtonColorClasses {
  primary = 'bg-violet-600 hover:bg-violet-800 text-white border border-transparent',
  secondary = 'bg-white hover:bg-violet-50 text-gray-600 border border-gray-300 shadow-sm',
  danger = 'bg-red-600 hover:bg-red-800 text-white border border-transparent',
  positiveghost = 'bg-transparent hover:bg-violet-50 text-gray-600 transition-colors duration-300 focus:ring-offset-0',
  negativeghost = 'bg-transparent hover:bg-white text-white hover:text-gray-800 transition-colors duration-300 focus:ring-offset-0',
}

export enum ButtonSizeClasses {
  'standard-sm' = 'text-sm leading-4 py-2 px-4',
  'standard-md' = 'text-base py-2 px-4',
  'only-icon-sm' = 'py-2 px-2',
  'only-icon-md' = 'py-3 px-3',
}

export enum ButtonIconColorClasses {
  primary = 'text-white',
  secondary = 'text-gray-600',
  danger = 'text-white',
  positiveghost = 'text-gray-600',
  negativeghost = 'text-white hover:text-gray-800 ',
}

export enum ButtonValidClasses {
  true = 'focus:ring-violet-500',
  false = 'focus:ring-red-500',
}
