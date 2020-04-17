import React from 'react';
import styled from 'styled-components';
import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';

type Props = {
  external?: boolean;
  href?: string;
  as?: string;
  children?: React.ReactNode;
} & LinkProps;

const StyledA = styled.a<{current?: boolean}>`
  cursor: ${({current}) => (current ? 'default' : 'pointer')};
  color: ${props => props.theme.primaryColor};
  text-decoration: underline;

  &:hover {
    text-decoration: ${({current}) => (current ? 'underline' : 'none')};
  }
`;

function A({external, as, href, children}: Props) {
  const router = useRouter();
  const current = router.asPath === href;

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
      <StyledA current={current}>{children}</StyledA>
    </Link>
  );
}

export default A;
