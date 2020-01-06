import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

interface LoadBarProps {
  active?: boolean;
}

const StyledLoadBar = styled.div<LoadBarProps>`
  width: 100%;
  text-align: center;
  height: 20px;
  position: relative;
`;

export default function LoadBar({active}: LoadBarProps) {
  const text = 'loading...';
  const props = useSpring({
    to: {
      position: 'relative',
      // transform: `translate3d(0, ${active ? 0 : '-100%'}, 0)`,
      marginTop: active ? 0 : -20,
      opacity: active ? 1 : 0,
    },
  });

  return (
    <animated.div style={props}>
      <StyledLoadBar>{text}</StyledLoadBar>
    </animated.div>
  );
}
