import { logo } from '@shared/Header/assets/import';
import { Link } from 'react-router-dom';

export function HeaderPublicSignUpForm() {
  return (
    <header className="flex items-center justify-end pr-3 mt-10">
      <div className="w-full flex items-start justify-end md:items-center">
        <div className="max-w-[148px] max-h-[89px] mx-auto md:max-w-[172px] md:max-h-[104px]">
          <img src={logo} alt="Star Plus Logo" width="100%" height="100%" />
        </div>

        <div className="mt-5 md:mt-0 md:relative">
          <Link
            to="/login"
            className="font-semibold text-[13px] text-gray-300 py-[1px] px-[6px] md:absolute md:right-16 md:w-max"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}
