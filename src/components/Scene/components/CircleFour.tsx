import styled, {keyframes} from 'styled-components';

import {theme} from '../../../styles';

import Animated from './Animated';

const enter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CircleFour = styled(Animated)`
  opacity: 0;
  position: absolute;
  left: auto;
  bottom: 0;
  right: 0%;
  will-change: transform;
  width: 100vw;
  max-width: 200px;
  padding: 0 25vw;
  z-index: 1;
  animation: ${enter} ${theme.timing[6]} ${theme.easing.easeInOutQuint};
`;

export default CircleFour;
