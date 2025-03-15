import { cloneElement, JSX } from 'react';
import clsx from 'clsx';
import { Badge } from '../Badge';
import { useTabList } from './useTabList';

export type TabListItemProps = {
  value: string;
  children: any;
  icon: JSX.Element;
  infoNumber?: number;
  id?: string;
  ariaControls?: string;
};

export const TabListItem = ({
  children,
  icon,
  infoNumber,
  value,
  id,
  ariaControls,
}: TabListItemProps) => {
  const { setSelectedTab, selectedValue } = useTabList();

  const Icon = cloneElement(icon, {
    className: clsx('group-hover:text-gray-500 -ml-0.5 mr-2 size-5', {
      'text-gray-900': selectedValue === value,
      'text-gray-400': !(selectedValue === value),
    }),
  });

  const styles = clsx(
    'hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 border-b-4 font-medium text-sm cursor-pointer',
    {
      'border-gray-900 text-gray-900': selectedValue === value,
      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
        !(selectedValue === value),
    }
  );

  return (
    <li key={value}>
      <button
        className={styles}
        onClick={() => {
          setSelectedTab(value);
        }}
        role="tab"
        id={id}
        aria-controls={ariaControls}
        aria-selected={selectedValue === value}
      >
        {Icon}
        <span>
          <div className="flex items-center space-x-2">
            <span>{children}</span>
            {typeof infoNumber === 'number' ? (
              <Badge color="gray">{infoNumber}</Badge>
            ) : null}
          </div>
        </span>
      </button>
    </li>
  );
};
