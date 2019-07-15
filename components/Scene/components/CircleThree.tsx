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

const CircleThree = styled(Animated)`
  opacity: 0;
  position: absolute;
  left: 40%;
  will-change: transform;
  height: 40vh;
  z-index: 1;
  animation: ${enter} ${theme.timing[6]} ${theme.easing.easeInOutQuint};
`;

export default CircleThree;
