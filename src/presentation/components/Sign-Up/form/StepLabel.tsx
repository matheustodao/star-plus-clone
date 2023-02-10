export interface StepLabelProps {
  currentStep: string | number;
}
export function StepLabel({ currentStep }: StepLabelProps) {
  return (
    <small className="pb-[10px] text-gray-300 text-[10px] tracking-[0.1rem]">
      STEP {currentStep} OF 4
    </small>
  );
}
