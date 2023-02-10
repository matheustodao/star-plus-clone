import { Navigate } from 'react-router';
import { LayoutPublic } from './components/Public';
import { LayoutSignUpPublic } from './components/Public/SignUp';

const layouts = {
  'public/default': <LayoutPublic />,
  'public/sign-up': <LayoutSignUpPublic />,
};

interface LayoutRootPublic {
  isPrivate: false;
  roles?: undefined;
  layout?: keyof typeof layouts;
}

interface LayoutRooPrivate {
  isPrivate: true;
  roles: string[] | string;
  layout: keyof typeof layouts;
  fallback?: string;
}

type LayoutRootProps = LayoutRooPrivate | LayoutRootPublic;

export function LayoutRoot(props: LayoutRootProps) {
  const role = 'user';
  const { isPrivate, roles, layout } = props;

  if (!isPrivate && !roles) {
    return layouts[layout ?? 'public/default'];
  }

  const { fallback } = props;

  if (!roles.includes(role)) {
    return <Navigate to={fallback || '/'} replace />;
  }

  return layouts[layout];
}

LayoutRoot.defaultProps = {
  isPrivate: false,
  roles: undefined,
  layout: 'public/default',
};
