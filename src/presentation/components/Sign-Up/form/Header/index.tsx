import { ReactNode } from 'react';
import { StepLabel, StepLabelProps } from '../StepLabel';

interface HeaderFormSignUpProps extends StepLabelProps {
  title: string;
  subtitle?: string | ReactNode | null;
}

export function HeaderFormSignUp({
  currentStep,
  title,
  subtitle,
}: HeaderFormSignUpProps) {
  return (
    <div className="mb-1">
      <StepLabel currentStep={currentStep} />

      <h3 className="pb-8 tracking-[0.11px] text-2xl font-semibold">{title}</h3>

      {!!subtitle && (
        <p className="pb-5 text-gray-300 text-sm leading-6">{subtitle}</p>
      )}
    </div>
  );
}

HeaderFormSignUp.defaultProps = {
  subtitle: null,
};
