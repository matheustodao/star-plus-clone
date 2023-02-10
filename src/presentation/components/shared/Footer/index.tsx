import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center pb-8 text-gray-300">
      <small className="text-sm flex flex-col items-center">
        Developed by{' '}
        <Link
          to="https://linkedin.com/in/matheustodao"
          target="_blank"
          rel="noreferrer"
          className="text-rose-600 font-bold underline tracking-wider"
        >
          @matheustodao
        </Link>
        <span className="text-xs p-2">For education purpose</span>
      </small>

      <span className="w-1 h-1 rounded-full bg-gray-300 my-5" />

      <small>
        Official Platform{' '}
        <Link
          to="https://starplus.com"
          target="_blank"
          rel="noreferrer"
          className="text-rose-600 font-bold underline tracking-wider"
        >
          Star+
        </Link>
      </small>
    </div>
  );
}
