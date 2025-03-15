import { RiCloseLine } from 'react-icons/ri';
import { useRef, JSX } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';

import clsx from 'clsx';
import { useKeyDown, useOutsideClick } from '../../hooks';

export type SlideOverProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
  description?: string;
  size?: 'sm' | 'lg';
  color?: 'primary' | 'secondary';
  open: boolean;
  onToggle: () => void;
};
export const SlideOver = ({
  children,
  title,
  description,
  size = 'sm',
  color = 'primary',
  open,
  onToggle,
}: SlideOverProps) => {
  const ref = useRef(null);

  useKeyDown('Escape', () => onToggle(), open);

  useOutsideClick(ref, () => onToggle(), open);

  return (
    <Transition
      show={open}
      as="div"
      className="fixed inset-0 overflow-hidden z-10"
    >
      <div className="absolute inset-0 overflow-hidden">
        <TransitionChild
          as="div"
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        />
        <TransitionChild
          as="section"
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div
            ref={ref}
            className={clsx('relative w-screen', {
              'max-w-md': size === 'sm',
              'max-w-5xl': size === 'lg',
            })}
          >
            <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div
                className={clsx('py-6 px-4 sm:px-6', {
                  'bg-violet-700 text-white border-none': color === 'primary',
                  'bg-gray-50 text-gray-900 border-b border-gray-200':
                    color === 'secondary',
                })}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 id="slide-over-heading" className="text-lg font-medium">
                      {title}
                    </h2>
                    {description && (
                      <p
                        className={clsx('text-sm font-normal', {
                          'text-white': color === 'primary',
                          'text-gray-500': color === 'secondary',
                        })}
                      >
                        {description}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={onToggle}
                  >
                    <span className="sr-only">Fechar painel</span>
                    <RiCloseLine
                      className={clsx('size-6', {
                        'text-white': color === 'primary',
                        'text-gray-400': color === 'secondary',
                      })}
                    />
                  </button>
                </div>
              </div>
              {children}
            </div>
          </div>
        </TransitionChild>
      </div>
    </Transition>
  );
};
