export type ErrorMessageProps = {
  children: string;
  id: HTMLParagraphElement['id'];
};

export const ErrorMessage = ({ children, id }: ErrorMessageProps) => (
  <p
    className="text-xs font-normal leading-4 text-red-600 truncate"
    id={`${id}-error`}
  >
    {children}
  </p>
);
