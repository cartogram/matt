import React from 'react';
import styled, {keyframes} from 'styled-components';
import {animated} from 'react-spring';
import {theme} from '../../../styles';

const enter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CircleTwo = styled(Animated)`
  position: absolute;
  left: 30%;
  will-change: transform;
  height: 40vh;
  animation: ${enter} ${theme.timing[6]} ${theme.easing.easeInOutQuint};
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
export default CircleTwo;
