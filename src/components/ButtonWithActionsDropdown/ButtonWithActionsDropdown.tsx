import { cloneElement, Fragment, useState, JSX } from 'react';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react';
import {
  RiArrowDownSLine as RiArrowDownSLineIcon,
  RiArrowUpSLine as RiArrowUpSLineIcon,
  RiCheckLine as RiCheckLineIcon,
} from 'react-icons/ri';
import hash from 'object-hash';
import clsx from 'clsx';
import {
  Button,
  ButtonColorClasses,
  ButtonProps,
  ButtonSizeClasses,
} from '../Button';
import { ButtonsWithActionsDropdownColor } from './types';

type ButtonWithActionsDropdownAction = {
  icon?: JSX.Element;
  label: string;
  onClick: () => void;
};

export type ButtonWithActionsDropdownProps = {
  color?: ButtonsWithActionsDropdownColor;
  size?: ButtonProps['size'];
  isFullWidth?: boolean;
  disabled?: ButtonProps['disabled'];
  showDisabledSpinner?: boolean;
  actions: ButtonWithActionsDropdownAction[];
};

export const ButtonWithActionsDropdown = ({
  color = 'primary',
  size = 'sm',
  isFullWidth = false,
  disabled = false,
  showDisabledSpinner = false,
  actions,
}: ButtonWithActionsDropdownProps) => {
  const [hoveredItemHash, setHoveredItemHash] = useState(null);

  const primaryButton = (
    <Button
      size={size}
      color={color}
      disabled={disabled}
      showDisabledSpinner={showDisabledSpinner}
      onClick={actions[0].onClick}
      removeFocusClasses
      className={clsx(
        'rounded-r-none focus:outline-none focus:ring-1 focus:ring-offset-1',
        {
          'flex-1': isFullWidth,
        }
      )}
    >
      {actions[0].label}
    </Button>
  );

  const secondaryButton = (
    <Menu as="div">
      {({ open }) => (
        <>
          <MenuButton
            className={clsx(
              'rounded-r border-l shadow-sm h-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-violet-500',
              [
                ButtonColorClasses[color],
                ButtonSizeClasses[`only-icon-${size}`],
                color === 'primary' && 'border-l-violet-200',
                disabled && 'opacity-40',
              ]
            )}
            disabled={disabled}
          >
            <span className="sr-only">Abir opções</span>
            {open ? (
              <RiArrowUpSLineIcon className="size-4" aria-hidden="true" />
            ) : (
              <RiArrowDownSLineIcon className="size-4" aria-hidden="true" />
            )}
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="[--anchor-gap:8px] [--anchor-padding:8px] rounded-md bg-white shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {actions.map(({ icon, label, onClick }) => {
                const actionHash = hash({ label, onClick });
                return (
                  <MenuItem
                    key={actionHash}
                    as="button"
                    onClick={onClick}
                    onMouseEnter={() => setHoveredItemHash(actionHash)}
                    onMouseLeave={() => setHoveredItemHash(null)}
                    className="flex justify-between items-center gap-x-2 px-4 py-2 hover:bg-violet-50 data-[focus]:bg-violet-50 w-full"
                  >
                    <div className="flex gap-x-2 items-center">
                      {icon
                        ? cloneElement(icon, {
                            className:
                              'size-5 text-gray-500 hover:text-gray-800 data-[focus]:text-gray-800',
                          })
                        : null}
                      <span className="text-sm font-normal text-gray-500 hover:text-gray-800 data-[focus]:text-gray-800">
                        {label}
                      </span>
                    </div>
                    <div className="size-4">
                      {hoveredItemHash === actionHash && (
                        <RiCheckLineIcon className="size-4 text-violet-600" />
                      )}
                    </div>
                  </MenuItem>
                );
              })}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );

  return (
    <div className="flex">
      {primaryButton}
      {secondaryButton}
    </div>
  );
};
