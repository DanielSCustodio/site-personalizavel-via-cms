import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
  activeClassName: string;
}

export default function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : '';
  return (
    <Link {...props}>
      {React.cloneElement(children, {
        className,
      })}
    </Link>
  );
}
