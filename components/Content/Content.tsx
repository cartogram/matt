import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: any;
  single?: boolean;
}

const StyledContent = styled.section<Props>`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: ${props => (props.single ? '0' : 'calc(-100vh + 10em)')};
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Content({children, single}: Props) {
  return <StyledContent single={single}>{children}</StyledContent>;
}

export default Content;
