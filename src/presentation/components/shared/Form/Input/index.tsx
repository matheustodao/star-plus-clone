import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

import './styles.scss';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, inputRef) => {
    return (
      <input
        ref={inputRef}
        className={className ? `input ${className}` : 'input'}
        {...props}
      />
    );
  }
);
