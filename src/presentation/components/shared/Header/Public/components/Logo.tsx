import logo from '@assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" title="Logo">
      <img src={logo} alt="Star Plus Logo" width="100%" height="100%" />
    </Link>
  );
}
