import { cloneElement, ReactNode, JSX } from 'react';
import {
  RiInformationFill as RiInformationFillIcon,
  RiAlertFill as RiAlertFillIcon,
} from 'react-icons/ri';
import clsx from 'clsx';
import { DialogTitle, Description } from '@headlessui/react';
import { ModalContentSeverity } from './types';

export type ModalContentProps = {
  severity?: ModalContentSeverity;
  title: string;
  titleIcon?: JSX.Element;
  description?: string;
  children?: ReactNode;
};

export const ModalContent = ({
  severity = 'info',
  title,
  titleIcon,
  description,
  children,
}: ModalContentProps) => {
  const severityToIcon = {
    info: <RiInformationFillIcon />,
    danger: <RiAlertFillIcon />,
  };

  const icon = titleIcon || severityToIcon[severity];

  const stylizedIcon = cloneElement(icon, {
    className: clsx('size-3', {
      'text-gray-800': severity === 'info',
      'text-red-600': severity === 'danger',
    }),
  });

  return (
    <div className="flex flex-col gap-y-6 text-left">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center gap-x-2">
          <div
            className={clsx(
              'size-5 rounded-full flex-shrink-0 flex items-center justify-center',
              {
                'bg-purple-50': severity === 'info',
                'bg-red-100': severity === 'danger',
              }
            )}
          >
            {stylizedIcon}
          </div>
          <DialogTitle
            as="h3"
            className="text-base font-medium text-gray-700 pr-4"
          >
            {title}
          </DialogTitle>
        </div>
        {description && (
          <Description as="p" className="text-sm text-gray-500 font-normal">
            {description}
          </Description>
        )}
      </div>
      {children}
    </div>
  );
};
