import React from 'react';
import styled from 'styled-components';

import A from '../A';
import Heading from '../Heading';

const StyledBackButton = styled.div`
  position: absolute;
  text-decoration: none !important;
  right: 0;
  span,
  a {
    text-decoration: none !important;
  }
`;

function BackButton() {
  const content = '✕';
  return (
    <StyledBackButton>
      <Heading>
        <A href="/">{content}</A>
      </Heading>
    </StyledBackButton>
  );
}

export default BackButton;
