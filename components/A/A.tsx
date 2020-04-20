import styled from 'styled-components';
import React from 'react';
import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';

type Props = {
  external?: boolean;
  href?: string;
  as?: string;
  children?: React.ReactNode;
  variant?: 'link' | 'button' | 'large-button';
} & LinkProps;

const StyledA = styled.a<{current?: boolean}>`
  cursor: ${({href, current}) => (current || !href ? 'default' : 'pointer')};
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;

  &:hover {
    text-decoration: ${({current, href}) =>
      current || !href ? 'underline' : 'none'};
  }
`;

const StyledButton = styled.a<{current?: boolean}>`
  cursor: ${({current}) => (current ? 'default' : 'pointer')};
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;

  &:hover {
    text-decoration: ${({current}) => (current ? 'underline' : 'none')};
  }

  padding: 4px 16px 1px;
  border: 2px solid;
  border-radius: 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  background: white;
`;

const StyledLargeButton = styled.a`
  border: 4px solid;
  font-size: ${props => props.theme.fontSizes[1]};
  display: inline-block;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  border-radius: 60px;
  padding: 8px 80px 4px 40px;
  position: relative;
  width: auto;

  span {
    position: absolute;
    right: 0;
    padding: 0;
    font-size: 140%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

function A({external, as, href, children, ...rest}: Props) {
  const variant = rest.variant || 'link';
  const router = useRouter();
  const current = router.asPath === href;

  if (variant === 'button') {
    return (
      <Link as={as} href={href}>
        <StyledButton current={current}>{children}</StyledButton>
      </Link>
    );
  }

  if (variant === 'large-button') {
    return (
      <StyledLargeButton href={href} target="_blank">
        {children}
      </StyledLargeButton>
    );
  }

  if (!href) {
    return <StyledA as="span">{children}</StyledA>;
  }

  if (external) {
    return (
      <StyledA href={href} target="_blank">
        {children}
      </StyledA>
    );
  }

  return (
    <Link as={as} href={href}>
      <StyledA current={current} href={href}>
        {children}
      </StyledA>
    </Link>
  );
}

export default A;
