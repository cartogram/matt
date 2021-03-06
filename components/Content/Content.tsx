import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const StyledContent = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;

function Content({children}: Props) {
  return <StyledContent>{children}</StyledContent>;
}

export const ContentInner = styled.div`
  padding: ${props => `0 0 ${props.theme.emSizes[10]}`};
  width: 100%;
`;

export default Content;
