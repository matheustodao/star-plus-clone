import { Root, Indicator, CheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import './styles.scss';

export function Checkbox({ className, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState<string>('');

  const onListenCheckboxState = (currentState: boolean | 'indeterminate') => {
    setChecked(currentState ? 'border-bg-rose-600 bg-rose-600' : '');
  };

  return (
    <Root
      className={
        className
          ? `checkbox--root ${className + checked}`
          : `checkbox--root ${checked}`
      }
      onCheckedChange={onListenCheckboxState}
      {...props}
    >
      <Indicator className="bg-rose-600">
        <CheckIcon className="bg-rose-600" />
      </Indicator>
    </Root>
  );
}
