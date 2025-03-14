import { ReactNode } from 'react';
import { RiQuestionLine } from 'react-icons/ri';
import { TableHeadCellTextAlign } from './types';
import { TooltipContainer, TooltipContainerProps } from '../TooltipContainer';

export type TableHeadCellProps = {
  children?: ReactNode;
  textAlign?: TableHeadCellTextAlign;
  className?: string;
  tooltipInfoElement?: TooltipContainerProps['content'];
  tooltipClassName?: TooltipContainerProps['tooltipClassName'];
};

export const TableHeadCell = ({
  children,
  textAlign = 'start',
  className = '',
  tooltipInfoElement,
  tooltipClassName,
}: TableHeadCellProps) => (
  <th
    scope="col"
    className={`bg-gray-50 py-2 text-gray-500 text-xs font-medium rounded-t-lg ${className}`}
  >
    <div className={`flex justify-${textAlign} items-center gap-x-2`}>
      {children}
      {tooltipInfoElement ? (
        <TooltipContainer
          content={tooltipInfoElement}
          tooltipClassName={tooltipClassName}
        >
          <span>
            <RiQuestionLine className="size-4 cursor-pointer text-gray-500" />
          </span>
        </TooltipContainer>
      ) : null}
    </div>
  </th>
);
