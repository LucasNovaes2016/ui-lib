import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';
import { RiCloseLine } from 'react-icons/ri';
import { Fragment, ReactNode } from 'react';
import { ModalSize } from './types';
import { ModalSizeClasses } from './constants';
import { useKeyDown } from '../../hooks';

export type ModalProps = {
  children: ReactNode;
  size?: ModalSize;
  show?: boolean;
  showCloseButton?: boolean;
  shouldCloseOnEsc?: boolean;
  onClose: () => void;
};

export const Modal = ({
  children,
  show,
  showCloseButton = true,
  shouldCloseOnEsc = true,
  size = 'md',
  onClose,
}: ModalProps) => {
  useKeyDown('Escape', () => onClose(), show && shouldCloseOnEsc);

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={clsx(
                  'bg-white shadow-xl transform transition-all p-6 rounded-lg relative flex flex-col gap-y-8',
                  [ModalSizeClasses[size]]
                )}
              >
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded  hover:bg-violet-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-violet-500"
                  >
                    <RiCloseLine className="size-6 text-gray-700" />
                  </button>
                )}
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
