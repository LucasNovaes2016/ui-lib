import { Badge, BadgeProps } from '../Badge';

export type ConditionalBadgeProps = {
  size?: BadgeProps['size'];
  status: boolean;
  trueText?: string;
  falseText?: string;
  trueColor?: BadgeProps['color'];
  falseColor?: BadgeProps['color'];
  isStatus?: BadgeProps['isStatus'];
  variant?: BadgeProps['variant'];
};

export const ConditionalBadge = ({
  size,
  status,
  trueText = 'Sim',
  falseText = 'Não',
  trueColor = 'green',
  falseColor = 'red',
  isStatus = false,
  variant = 'filled',
}: ConditionalBadgeProps) => {
  if (status) {
    return (
      <Badge
        size={size}
        color={trueColor}
        isStatus={isStatus}
        variant={variant}
      >
        {trueText}
      </Badge>
    );
  }

  return (
    <Badge size={size} color={falseColor} isStatus={isStatus} variant={variant}>
      {falseText}
    </Badge>
  );
};
