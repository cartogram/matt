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

const CircleThree = styled(Animated)`
  position: absolute;
  left: 40%;
  will-change: transform;
  height: 40vh;
  z-index: 1;
  max-width: 500px;

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

export default CircleThree;
