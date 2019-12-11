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
  margin-top: ${props => (props.single ? '0' : '-100vh')};
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;

function Content({children, single}: Props) {
  return <StyledContent single={single}>{children}</StyledContent>;
}

export const ContentInner = styled.div`
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  width: 100%;
`;

export default Content;
