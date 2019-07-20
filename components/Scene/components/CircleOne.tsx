import styled, {keyframes} from 'styled-components';
import {theme} from '../../../styles';
import Animated from './Animated';

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
`;

export default CircleOne;
