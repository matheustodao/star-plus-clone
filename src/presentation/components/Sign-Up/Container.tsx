import { ReactNode } from 'react';

interface SignUpContainerProps {
  children: ReactNode;
}

export function SignUpContainer({ children }: SignUpContainerProps) {
  return <main className="px-5 pt-8 h-full w-full h-[100vh]">{children}</main>;
}
