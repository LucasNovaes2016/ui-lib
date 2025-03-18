import {
  RiCheckboxCircleLine,
  RiCloseLine,
  RiErrorWarningLine,
  RiInformationLine,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from 'react-icons/ri';
import clsx from 'clsx';

export type FeedbackProps = {
  content: string;
  hideCloseButton?: boolean;
  onClose?: () => void;
  severity: 'error' | 'info' | 'warning' | 'success';
  fillIcon?: boolean;
  removeBackgroundColor?: boolean;
  title: string;
};

export const Feedback = ({
  content,
  hideCloseButton = false,
  onClose,
  removeBackgroundColor = false,
  severity,
  fillIcon = false,
  title,
}: FeedbackProps) => (
  <div
    className={clsx(
      'rounded-lg px-4 py-5',
      removeBackgroundColor
        ? 'bg-white'
        : {
            'bg-emerald-50': severity === 'success',
            'bg-amber-50': severity === 'warning',
            'bg-blue-50': severity === 'info',
            'bg-red-50': severity === 'error',
          }
    )}
  >
    <div className="flex items-center gap-x-4">
      <div className="flex-shrink-0">
        {
          {
            error: fillIcon ? (
              <RiErrorWarningFill className="size-6 text-red-400" />
            ) : (
              <RiErrorWarningLine className="size-6 text-red-400" />
            ),
            info: fillIcon ? (
              <RiInformationFill className="size-6 text-blue-400" />
            ) : (
              <RiInformationLine className="size-6 text-blue-400" />
            ),
            success: fillIcon ? (
              <RiCheckboxCircleFill className="size-6 text-emerald-400" />
            ) : (
              <RiCheckboxCircleLine className="size-6 text-emerald-400" />
            ),
            warning: fillIcon ? (
              <RiErrorWarningFill className="size-6 text-amber-400" />
            ) : (
              <RiErrorWarningLine className="size-6 text-amber-400" />
            ),
          }[severity]
        }
      </div>
      <div className="w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="mt-1 text-sm text-gray-500">{content}</p>
      </div>
      {!hideCloseButton && (
        <div className="ml-4 flex-shrink-0 flex">
          <button
            type="button"
            className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            onClick={() => {
              if (onClose) {
                onClose();
              }
            }}
          >
            <span className="sr-only">Fechar</span>
            <RiCloseLine className="size-5" />
          </button>
        </div>
      )}
    </div>
  </div>
);
