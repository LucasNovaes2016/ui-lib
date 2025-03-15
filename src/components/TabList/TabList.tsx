import { useEffect, useMemo, JSX } from 'react';
import clsx from 'clsx';
import { SelectGroup, Option } from '../SelectGroup';
import { useTabList } from './useTabList';

export type TabListProps = {
  border?: boolean;
  children: JSX.Element | JSX.Element[];
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (tabListItem: string) => void;
};

export const TabList = ({
  border,
  children,
  id,
  label,
  name,
  value,
  onChange,
}: TabListProps) => {
  const { selectedTab, setSelectedTab, setSelectedValue } = useTabList();

  const handleTabListItemChanged = (nextValue) => {
    setSelectedTab(nextValue);
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    if (selectedTab) {
      onChange(selectedTab);
    }
  }, [selectedTab]);

  const tabItems = useMemo(
    () => [].concat(children)?.filter((tabItem) => tabItem),
    [children]
  );

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          {label}
        </label>
        <SelectGroup
          id={id}
          name={name}
          onChange={handleTabListItemChanged}
          value={selectedTab}
          noEmptyOption
        >
          {tabItems?.map(({ props }) => (
            <Option key={props.value} value={props.value}>
              {props.children}
            </Option>
          ))}
        </SelectGroup>
      </div>
      <div className="hidden sm:block">
        <div className={clsx({ 'border-b border-gray-200': border })}>
          <ul
            className="-mb-px flex flex-row flex-wrap gap-x-8 border-b boder-gray-400"
            role="tablist"
          >
            {tabItems?.filter((tabItem) => tabItem)}
          </ul>
        </div>
      </div>
    </>
  );
};
