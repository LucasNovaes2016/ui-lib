import { cloneElement, ReactNode, useState, JSX } from 'react';
import {
  offset,
  flip,
  shift,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useHover,
  useClick,
} from '@floating-ui/react';

export type TooltipContainerProps = {
  children: JSX.Element;
  content?: ReactNode;
  trigger?: 'hover' | 'click';
  tooltipPosition?: 'bottom-start' | 'bottom' | 'bottom-end' | 'top';
  tooltipClassName?: string;
};

export const TooltipContainer = ({
  children,
  content,
  trigger = 'hover',
  tooltipClassName = 'w-max',
  tooltipPosition = 'bottom',
}: TooltipContainerProps) => {
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), shift(), flip()],
    placement: tooltipPosition,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    ...(trigger === 'hover'
      ? [
          useHover(context, {
            delay: 100,
          }),
        ]
      : [useClick(context)]),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props })
      )}

      {open && content && (
        <div
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: '1',
          }}
          className={`bg-black text-white p-2 text-xs break-normal ${tooltipClassName}`}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
};
