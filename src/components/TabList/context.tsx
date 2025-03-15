import { createContext, useState, ReactNode } from 'react';

export type TabListProviderProps = {
  children: ReactNode;
};

export type TabListContextTypes = {
  selectedTab: string;
  selectedValue: string;
  setSelectedTab: (setSelectedTab: string) => void;
  setSelectedValue: (selectedValue: string) => void;
};

const TabListContext = createContext<TabListContextTypes>(null);

const TabListProvider = ({ children }: TabListProviderProps) => {
  const [selectedTab, setSelectedTab] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <TabListContext.Provider
      value={{ selectedTab, selectedValue, setSelectedTab, setSelectedValue }}
    >
      {children}
    </TabListContext.Provider>
  );
};

export { TabListProvider, TabListContext };
