import { ReactNode } from 'react';

interface SignUpContainerProps {
  children: ReactNode;
  className?: string;
}

export function SignUpContainer({ children, className }: SignUpContainerProps) {
  return (
    <main className={`px-5 pt-8 h-full w-full relative ${className}`}>
      {children}
    </main>
  );
}

SignUpContainer.defaultProps = {
  className: '',
};
