import React from 'react';
import {useSpring} from 'react-spring';
import {title, posts, twoLiner} from '../../content';
import List from '../List';
import Text from '../Text';
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

const trans1 = (x: number, y: number) => {
  const transY = y / 30;
  const transX = x / 30;
  const rotate = ((x + y) / 9) * -1;
  const deg = `${rotate > 360 ? 360 : rotate}deg`;

  return `rotate(${deg}) translate3d(${transX}px,${transY}px, 0)`;
};

const trans2 = (x: number, y: number) =>
  `translate3d(${x / 6 - 300}px,${y / 6 - 120}px,0)`;

const trans3 = (x: number, y: number) =>
  `translate3d(${x / 4 + 170}px,${y / 4 - 300}px,0)`;

const trans4 = (x: number, y: number) =>
  `translate3d(${x / 30}px,${y / 30}px,0)`;

// const trans5 = (x: number, y: number) =>
//   `translate3d(${x / 30}px,${y / 30}px,0)`;

// const trans6 = (x: number, y: number) =>
//   `translate3d(${x / 30}px,${y / 30 - 250}px,0)`;

// const trans7 = (x: number, y: number) =>
//   `translate3d(${x / 30}px,${y / 30 + 100}px,0)`;

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
            size={180}
            fill={Fill.LinearGradient}
            filter="dropShadow"
          />
        }
      />
      <CircleTwo
        animationProps={props}
        transform={trans2}
        svg={<CircleSvg size={80} fill={Fill.Waves} filter="none" />}
      />
      <CircleThree
        animationProps={props}
        transform={trans3}
        svg={<CircleSvg size={40} fill={Fill.DiagonalLines} filter="none" />}
      />
      <CircleFour animationProps={props} transform={trans4}>
        <Text>
          {title}–{twoLiner}
        </Text>
        <List items={posts} />
      </CircleFour>
      {/* <CircleFour animationProps={props} transform={trans5}>
        <List items={posts} />
      </CircleFour> */}
      {/* <CircleFour animationProps={props} transform={trans6}>
        {title}
      </CircleFour> */}
      {/* <CircleFour animationProps={props} transform={trans7}>
      </CircleFour> */}
    </Container>
  );
}

export default Scene;
