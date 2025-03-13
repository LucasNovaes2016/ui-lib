import { Button, ButtonProps } from '../Button';
import { actionButtonDefaultSize } from './constants';

type ActionType = {
  text: string;
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
  type?: ButtonProps['type'];
  showDisabledSpinner?: ButtonProps['showDisabledSpinner'];
  onClick?: ButtonProps['onClick'];
};

export type ModalActionsProps = {
  primary: ActionType;
  secondary?: ActionType;
  disableActions?: boolean;
};

export const ModalActions = ({
  primary,
  secondary,
  disableActions = false,
}: ModalActionsProps) => (
  <div className="flex justify-end gap-x-2">
    {secondary ? (
      <Button
        color={secondary.color || 'secondary'}
        size={secondary.size || actionButtonDefaultSize}
        disabled={disableActions}
        showDisabledSpinner={secondary.showDisabledSpinner}
        onClick={secondary.onClick}
      >
        {secondary?.text}
      </Button>
    ) : null}
    <Button
      color={primary?.color}
      size={primary?.size || actionButtonDefaultSize}
      disabled={disableActions}
      showDisabledSpinner={primary?.showDisabledSpinner}
      type={primary?.type}
      onClick={primary?.onClick}
    >
      {primary.text}
    </Button>
  </div>
);
