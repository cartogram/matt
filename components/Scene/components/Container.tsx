import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import {fillFlex, fill} from '../../../styles';

const StyledContainer = styled.div`
  ${fillFlex}
  &:before {
    ${fill};
    content: '';
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: overlay;
    background: ${props => props.theme.siteBackground};
  }
`;

interface Props {
  children?: React.ReactNode;
}

export default function Container({children}: Props) {
  const animationProps = useSpring({
    transform: `translate3d(0, 0, 0)`,
    opacity: 1,
    from: {transform: `translate3d(0, 300px, 0)`, opacity: 0},
  });

  return (
    <animated.div style={animationProps}>
      <StyledContainer>{children}</StyledContainer>
    </animated.div>
  );
}
