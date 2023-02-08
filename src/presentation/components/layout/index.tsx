import { Navigate } from 'react-router';
import { PublicLayout } from './components/Public';

const layouts = {
  public: <PublicLayout />,
};

interface LayoutRootPublic {
  isPrivate: false;
  roles?: undefined;
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
  const { isPrivate, roles } = props;

  if (!isPrivate && !roles) {
    return layouts.public;
  }

  const { layout, fallback } = props;

  if (!roles.includes(role)) {
    return <Navigate to={fallback || '/'} replace />;
  }

  return layouts[layout];
}

LayoutRoot.defaultProps = {
  isPrivate: false,
  roles: undefined,
};
