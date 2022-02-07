import styled from 'styled-components';
import React from 'react';
import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';

type Props = Omit<LinkProps, 'href'> & {
  external?: boolean;
  href?: string;
  as?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseOver?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const StyledA = styled.a<{current?: boolean}>`
  cursor: ${({href, current}) => (current || !href ? 'default' : 'pointer')};
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;
  background: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    text-decoration: ${({current, href, onClick}) =>
      current || (!onClick && !href) ? 'underline' : 'none'};
  }
`;

function A({external, as, href, children, ...rest}: Props) {
  const router = useRouter();
  const current = router.asPath === href;

  if (!href) {
    return (
      <StyledA as="span" {...rest}>
        {children}
      </StyledA>
    );
  }

  if (external) {
    return (
      <StyledA href={href} target="_blank" {...rest}>
        {children}
      </StyledA>
    );
  }

  return (
    <Link as={as} href={href}>
      <StyledA current={current} href={href} {...rest}>
        {children}
      </StyledA>
    </Link>
  );
}

export default A;
