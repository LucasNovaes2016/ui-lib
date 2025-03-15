import {
  RiNotificationBadgeFill,
  RiCheckboxCircleFill,
  RiAlarmWarningFill,
  RiCloseFill,
} from 'react-icons/ri';

import { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

import { ToastSeverity } from './types';

export type ToastProps = {
  title: string;
  content: ReactNode;
  severity?: ToastSeverity;
  onClose: () => void;
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ title, content, severity = 'notification', onClose }, ref) => {
    const severityToIcon = {
      success: <RiCheckboxCircleFill className="size-4 text-green-500" />,
      error: <RiAlarmWarningFill className="size-4 text-red-500" />,
      notification: (
        <RiNotificationBadgeFill className="size-4 text-violet-500" />
      ),
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'p-4 flex items-start gap-x-4 rounded border shadow-xl',
          {
            'bg-green-50 border-green-200': severity === 'success',
            'bg-red-50 border-red-200': severity === 'error',
            'bg-gray-50 border-gray-200': severity === 'notification',
          }
        )}
      >
        <div className="flex-1 flex gap-x-2">
          <div className="flex justify-start">{severityToIcon[severity]}</div>
          <div className="flex flex-col gap-y-1">
            <span
              className={clsx(
                'text-sm font-medium',
                severity === 'success' ? 'text-gray-700' : 'text-gray-600'
              )}
            >
              {title}
            </span>
            <span className="text-sm text-gray-500 font-normal">{content}</span>
          </div>
        </div>
        <button onClick={onClose}>
          <RiCloseFill className="size-4 text-gray-700" />
        </button>
      </div>
    );
  }
);
