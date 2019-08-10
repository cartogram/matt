import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: calc(-100vh + 10em);
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  children?: any;
}

function Content({children}: Props) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;
