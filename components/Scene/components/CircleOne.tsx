import React from 'react';
import styled, {keyframes} from 'styled-components';
import {animated} from 'react-spring';
import {theme} from '../../../styles';

const enter = keyframes`
  from {
    transform:scale(10);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const CircleOne = styled(Animated)`
  will-change: transform;
  min-width: 60ch;
  min-height: 60ch;
  width: 60vw;
  height: 60vw;
  max-width: 100ch;
  max-height: 100ch;
  transform-origin: 50% 50%;
  animation: ${enter} ${theme.timing[3]} ${theme.easing.easeInOutQuint};
  max-width: 1000px;
`;

function Animated({transform, className, svg}: any) {
  return (
    <animated.svg
      className={className}
      transform={transform}
      version="1.1"
      viewBox="0 0 400 400"
    >
      {svg}
    </animated.svg>
  );
}

export default CircleOne;
