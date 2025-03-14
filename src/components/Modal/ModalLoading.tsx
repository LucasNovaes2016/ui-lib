import { DialogTitle, Description } from '@headlessui/react';
import { RiLoaderLine as RiLoaderLineIcon } from 'react-icons/ri';

export type ModalLoadingProps = {
  title: string;
  description: string;
};

export const ModalLoading = ({ title, description }: ModalLoadingProps) => (
  <div className="flex flex-col gap-y-6 items-center">
    <div className="rounded-full flex justify-center items-center bg-violet-100 size-12">
      <RiLoaderLineIcon className="text-gray-800 size-10 animate-slow-spin" />
    </div>
    <div className="flex flex-col gap-y-2 items-center">
      <DialogTitle as="h3" className="text-base font-medium text-gray-700 pr-4">
        {title}
      </DialogTitle>
      <Description as="p" className="text-sm text-gray-500 font-normal">
        {description}
      </Description>
    </div>
  </div>
);
