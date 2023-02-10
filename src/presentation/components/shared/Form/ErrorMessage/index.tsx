import { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="ml-1 mt-1 text-xs text-red-500 tracking-[-0.5px] leading-[1.5]">
      {children}
    </p>
  );
}
