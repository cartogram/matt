import React from 'react';
import styled, {keyframes} from 'styled-components';
import {title} from '../../content';
import {theme} from '../../styles';
import H1 from '../H1';

const enter = keyframes`
  from {
    transform: translate(0, -100%);
  }

  to {
    transform: translate(0, 0%);
  }
`;
const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: ${props => props.theme.emSizes[4]};
  animation: ${enter} ${theme.timing[3]} ${theme.easing.easeInOutQuint};
`;

function Content() {
  return (
    <StyledContent>
      <H1>{title}</H1>
    </StyledContent>
  );
}

export default Content;
