import { SignUpContainer as Container } from '@components/Sign-Up/Container';
import { HeaderFormSignUp } from '@components/Sign-Up/form/Header';
import { Checkbox } from '@shared/Form/Checkbox';
import { ErrorMessage } from '@shared/Form/ErrorMessage';
import { Input } from '@shared/Form/Input';

export function SignUpPage() {
  const isEmailInvalid = false;
  return (
    <Container className="h-[100vh]">
      <div className="mx-auto max-w-[374px]">
        <HeaderFormSignUp
          currentStep={1}
          title="Enter your email"
          subtitle="Already have a Disney+ account? Use the same email for easy login and
          payment."
        />

        <fieldset className="pb-5">
          <legend className="hidden">email</legend>
          <Input
            className="w-full"
            placeholder="Email"
            type="email"
            aria-invalid={isEmailInvalid}
          />
          {isEmailInvalid && (
            <ErrorMessage>
              Sorry, we are having trouble creating your account. Please
              re-enter your email and password and try again. If the problem
              persists, contact Star+ Support (Error Code 6).
            </ErrorMessage>
          )}
        </fieldset>

        <div>
          <div className="flex mb-5">
            <div>
              <Checkbox id="star+-social" />
            </div>

            <label
              htmlFor="star+-social"
              className="text-xs text-gray-300 ml-2 leading-[1.5] cursor-pointer tracking-[-0.4px] p-1"
            >
              Yes! I would like to receive updates, special offers, and other
              information from Star+ and The Walt Disney Family of Companies.
            </label>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-50/10 rounded box-content w-full -ml-2">
            <p className="text-xs text-gray-300 leading-[1.5] tracking-tighter">
              Disney will use your data to provide and support the services, to
              personalize and improve your Star+ experience and to send you
              information about Star+. You can change your communication
              preferences anytime. We may use your data as described in our
              <br />
              <span className="text-blue-300 underline">Privacy Policy</span>,
              including sharing it with The Walt Disney Family of Companies. By
              clicking "Continue", you acknowledge that you have read our{' '}
              <span className="text-blue-300 underline">Privacy Policy</span>{' '}
              and the specific terms applicable to Brazil.
            </p>

            <button
              type="button"
              className="btn--primary btn--inline-flex w-full mt-2"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
