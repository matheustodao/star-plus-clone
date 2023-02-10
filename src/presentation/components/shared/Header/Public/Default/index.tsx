import { logo } from '@shared/Header/assets/import';

export function HeaderPublic() {
  return (
    <header className="flex items-center justify-end pr-3 mt-10">
      <div className="w-full flex items-center justify-center">
        <div className="max-w-[148px] max-h-[89px]">
          <img src={logo} alt="Star Plus Logo" width="100%" height="100%" />
        </div>
      </div>
    </header>
  );
}
