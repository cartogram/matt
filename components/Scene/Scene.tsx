import React from 'react';
import {useSpring} from 'react-spring';
import {title, twoLiner, posts} from '../../content';
import List from '../List';
import H2 from '../H2';
import {
  CircleOne,
  CircleTwo,
  CircleThree,
  CircleFour,
  Container,
} from './components';
import {CircleSvg, Fill} from './svgs';

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const trans1 = (x: number, y: number) =>
  `translate3d(${x / 10}px,${y / 10}px,0)`;

const trans2 = (x: number, y: number) =>
  `translate3d(${x / 6 - 220}px,${y / 6 - 120}px,0)`;

const trans3 = (x: number, y: number) =>
  `translate3d(${x / 4 - 300}px,${y / 4 + 200}px,0)`;

const trans4 = (x: number, y: number) =>
  `translate3d(${x / 30 - 300}px,${y / 30 - 300}px,0)`;

const trans5 = (x: number, y: number) =>
  `translate3d(${x / 30}px,${y / 30}px,0)`;

function Scene() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 10, tension: 550, friction: 140},
  }));

  return (
    <Container
      onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}
    >
      <CircleOne
        animationProps={props}
        transform={trans1}
        svg={
          <CircleSvg
            size={150}
            fill={Fill.LinearGradient}
            filter="dropShadow"
          />
        }
      />
      <CircleTwo
        animationProps={props}
        transform={trans2}
        svg={<CircleSvg size={60} fill={Fill.Waves} filter="none" />}
      />
      <CircleThree
        animationProps={props}
        transform={trans3}
        svg={<CircleSvg size={35} fill={Fill.DiagonalLines} filter="none" />}
      />
      <CircleFour animationProps={props} transform={trans4}>
        <H2>
          {title} {twoLiner}
        </H2>
      </CircleFour>
      <CircleFour animationProps={props} transform={trans5}>
        <List items={posts} />
      </CircleFour>
    </Container>
  );
}

export default Scene;
