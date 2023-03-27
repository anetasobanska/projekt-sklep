import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement, ComponentProps, ReactElement } from 'react';

type ActiveLinkProps = ComponentProps<typeof Link> & {
  activeClassName: string;
  children: ReactElement;
  exact: boolean;
};

export const ActiveLink = ({ children, activeClassName, exact, className, ...props }: ActiveLinkProps) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const pathnameToCompare = exact ? pathname : stripQueryAndFragment(pathname);
  const hrefToCompare = exact ? props.href.toString() : stripQueryAndFragment(props.href.toString());

  const classes = clsx(className, child.props.className, {
    [activeClassName]: pathnameToCompare === hrefToCompare,
  });

  if (!child) {
    return null;
  }

  
  return <Link {...props}>{cloneElement(child, { className: classes })}</Link>;
};

const stripQueryAndFragment = (path: string) => path.split('?')[0];