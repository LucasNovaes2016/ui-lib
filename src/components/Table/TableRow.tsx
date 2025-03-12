import React, { ReactNode } from 'react';
import hash from 'object-hash';
import {
  RiArrowDownSLine as RiArrowDownSLineIcon,
  RiArrowUpSLine as RiArrowUpLineIcon,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useTable } from './useTable';

export type TableRowProps = {
  children: ReactNode;
  expandableRowContent?: ReactNode;
  expandableRowClassName?: string;
  to?: string;
  title?: string;
};

const extractTextFromChildren = (children: ReactNode): string => {
  const extractText = (node: ReactNode): string => {
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      if (element.props.children) {
        return React.Children.toArray(element.props.children)
          .map(extractText)
          .join(' ');
      }
    }

    return typeof node === 'string' || typeof node === 'number'
      ? String(node)
      : '';
  };

  return React.Children.toArray(children).map(extractText).join(' ');
};

export const TableRow = ({
  children,
  expandableRowContent,
  expandableRowClassName,
  to,
  title,
}: TableRowProps) => {
  const { expandedRows, toggleRowExpansion } = useTable();

  const navigate = to ? useNavigate() : null;

  const rowText = extractTextFromChildren(children);
  const rowHash = hash(rowText);
  const isRowExpanded = expandedRows.includes(rowHash);

  const handleNavigation = () => {
    if (to && navigate) {
      navigate(to);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (to && (e.key === 'Enter' || e.key === ' ')) {
      handleNavigation();
    }
  };

  return (
    <>
      <tr
        className={`${
          to
            ? 'cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black'
            : ''
        } ${isRowExpanded ? 'has-expanded-row' : ''}`}
        onClick={to ? handleNavigation : undefined}
        onKeyDown={to ? handleKeyDown : undefined}
        role={to ? 'link' : undefined}
        tabIndex={to ? 0 : undefined}
        title={title}
      >
        {React.Children.map(children, (child) => child)}
        {expandableRowContent ? (
          <td className="py-4 flex justify-end">
            <button onClick={() => toggleRowExpansion(rowHash)}>
              {isRowExpanded ? (
                <RiArrowUpLineIcon className="size-6 text-gray-500" />
              ) : (
                <RiArrowDownSLineIcon className="size-6 text-gray-500" />
              )}
            </button>
          </td>
        ) : null}
      </tr>
      {isRowExpanded && expandableRowContent ? (
        <tr className={`is-expanded ${expandableRowClassName}`}>
          <td colSpan={React.Children.count(children) + 1} className="py-4 ">
            {expandableRowContent}
          </td>
        </tr>
      ) : null}
    </>
  );
};
