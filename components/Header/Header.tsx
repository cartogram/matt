import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading';
import A from '../A';

interface Props {}

const StyledHeader = styled.div<Props>`
  font-weight: normal;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  padding: ${props => `${props.theme.emSizes[2]} ${props.theme.emSizes[3]}`};
`;

export default function Header() {
  console.log('test');
  return (
    <StyledHeader>
      <Heading>
        <A href="/">Back</A>
      </Heading>
    </StyledHeader>
  );
}
