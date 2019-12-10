import React, {useCallback} from 'react';
import styled from 'styled-components';
import {useSpring, interpolate} from 'react-spring';
import {CircleOne, CircleTwo, CircleThree, Container} from './components';
import {CircleSvg, Fill} from './svgs';

const StyledScene = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

interface Props {
  children: any;
}
function Scene({children}: Props) {
  const [{st, xy}, set] = useSpring(() => ({
    st: 0,
    xy: [0, 0],
    config: {mass: 10, tension: 550, friction: 140},
  }));

  const onScroll = useCallback(
    event => set({st: event.target.scrollTop / 30}),
    [set],
  );

  const onMove = useCallback(
    ({clientX: x, clientY: y}) => set({xy: calc(x, y)}),
    [set],
  );

  const interpCircleWaves = interpolate(
    // @ts-ignore
    [st, xy],
    // @ts-ignore
    (o, [x, y]) => {
      return `translate(${x / 30 - 300},${y / 30 - 300 + o * 30}) scale(0.8)`;
    },
  );

  const interpCircleMain = interpolate(
    // @ts-ignore
    [st, xy],
    // @ts-ignore
    (o, [x, y]) => {
      const transY = y / 30;
      const transX = x / 30;
      const rotate = ((x + y) / 9) * -1;
      const deg = `${rotate > 360 ? 360 : rotate}`;
      const scroll = o * 20;

      return `translate(${transX + scroll},${transY + scroll}) rotate(${deg})`;
    },
  );

  const interpDiagonal = interpolate(
    // @ts-ignore
    [st, xy],
    // @ts-ignore
    (o, [x, y]) => {
      const transY = y / 4;
      const transX = x / 4;
      const scroll = o * 30;
      return `translate(${transX + 170 - scroll},${transY - 300 - o * 5})`;
    },
  );

  return (
    <StyledScene onScroll={onScroll} onMouseMove={onMove}>
      <Container>
        <CircleOne
          animationProps={{st, xy}}
          transform={interpCircleMain}
          svg={
            <CircleSvg
              size={180}
              fill={Fill.LinearGradient}
              filter="dropShadow"
            />
          }
        />
        <CircleTwo
          transform={interpCircleWaves}
          svg={<CircleSvg size={80} fill={Fill.Waves} filter="none" />}
        />
        <CircleThree
          animationProps={{st, xy}}
          transform={interpDiagonal}
          svg={<CircleSvg size={40} fill={Fill.DiagonalLines} filter="none" />}
        />
      </Container>
      {children}
    </StyledScene>
  );
}

export default Scene;
