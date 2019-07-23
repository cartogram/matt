import React from 'react';
import styled, {keyframes} from 'styled-components';
import {title} from '../../content';
import {theme} from '../../styles';
import H1 from '../H1';

const enter = keyframes`
  0 {
    transform: translate(0, -100%);
  }

  100% {
    transform: translate(0, 0%);
  }
`;
const StyledHeader = styled.div`
  position: absolute;
  top: ${props => props.theme.emSizes[14]};
  left: 0;
  right: 0;
  overflow: hidden;
  height: 100px;
  pointer-events: none;
`;

const StyledHeaderInner = styled.div`
  transform: translate(0, -100%);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  animation: ${enter} ${theme.timing[2]} ${theme.timing[1]}
    ${theme.easing.easeInOutQuint} forwards;
  z-index: 20;t
`;

function Content() {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <H1>{title}</H1>
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Content;
