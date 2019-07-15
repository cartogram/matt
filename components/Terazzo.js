import React from 'react';
import styled, {css} from 'styled-components';
import {PatternLines, PatternWaves} from '@vx/pattern';

import {Spring, animated, config} from 'react-spring';
import {bp, theme, center, fill} from '../../styles';

function makeCicle(r) {
  return {
    d: `M 200, 200 m -${r}, 0 a ${r}, ${r} 0 1,0 ${r *
      2},0 a ${r}, ${r} 0 1,0 -${r * 2},0`,
  };
}

function makeShape() {
  return {
    d:
      'M0.899517592,3.96730629 C0.899517592,9.25222366 15.5862577,58.5636873 17.3267303,61.5703079 C19.0672028,64.5769285 44.4142168,37.9098877 44.4142168,17.7958367 C41.2642406,2.73098391 0.899517592,-3.50835509 0.899517592,3.96730629 Z',
  };
}

const SHAPES = {
  CIRCLE: 'CIRCLE',
};

function Shape({shape, filter, fill, size, styles, className}) {
  let path = makeShape();
  if (shape === SHAPES.CIRCLE) {
    path = makeCicle(size);
  }

  return (
    <animated.svg
      className={className}
      style={styles}
      version="1.1"
      viewBox="0 0 400 400"
    >
      <defs>
        {filter && filter === 'dropshadow' && (
          <filter id="dropshadow">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation={Math.floor(size / 20)}
            />
            <feOffset dx="0" dy={Math.floor(size / -30)} />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        {fill && fill === 'linear' && (
          <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme.colors.grey[0]}
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor={theme.colors.grey[0]}
              stopOpacity="0"
            />
          </linearGradient>
        )}
      </defs>
      {fill && fill === 'dhLines' && (
        <PatternLines
          id="dhLines"
          height={1.5}
          width={1.5}
          stroke="black"
          strokeWidth={0.1}
          orientation={['vertical', 'horizontal']}
        />
      )}
      {fill && fill === 'vLines' && (
        <PatternLines
          id="vLines"
          height={2}
          width={2}
          stroke="black"
          strokeWidth={0.3}
          orientation={['diagonal']}
        />
      )}
      {fill && (
        <PatternWaves
          id="Waves"
          height={3}
          width={3}
          fill="transparent"
          stroke="black"
          strokeWidth={0.3}
          complement
        />
      )}
      <g fillRule="evenodd">
        <path
          {...path}
          filter={filter ? `url(#${filter})` : ''}
          fill={fill ? `url(#${fill})` : ''}
        />
      </g>
    </animated.svg>
  );
}

const StyledCircle = styled(Shape)`
  ${center()};
`;

function background(props) {
  const {images, siteBackgroundColor} = props.theme;
  return `url(${images.background}) ${siteBackgroundColor}`;
}

const StyledContainer = styled.div`
  ${fill};
  &:before {
    ${fill};
    content: '';
    z-index: 1;
    mix-blend-mode: overlay;
    background: ${background};
  }
`;

const StyledInner = styled.div`
  ${center()} position: fixed;
  width: 140%;
  ${bp.md`
    max-width: 100%;
  `};
  ${bp.lg`
    max-width: 60%;
  `};
`;

class Terrazzo extends React.PureComponent {
  state = {
    shapes: [
      {
        id: '1',
        shape: SHAPES.CIRCLE,
        filter: 'dropshadow',
        fill: 'linear',
        size: 150,
        from: {opacity: 0, transform: 'translate3d(-50%, -50%, 0)  scale(10)'},
        to: {opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)'},
      },
      {
        id: '2',
        shape: SHAPES.CIRCLE,
        fill: 'vLines',
        size: 40,
        from: {opacity: 0, transform: 'translate3d(-10%, 100%, 0) scale(0)'},
        to: {opacity: 1, transform: 'translate3d(-10%, -50%, 0) scale(1)'},
      },
      {
        id: '3',
        shape: SHAPES.CIRCLE,
        fill: 'Waves',
        size: 32,
        from: {opacity: 0, transform: 'translate3d(-85%, 100%, 0) scale(0)'},
        to: {opacity: 1, transform: 'translate3d(-85%, -35%, 0) scale(1)'},
        config: config.slow,
      },
      {
        id: '4',
        fill: 'dhLines',
        shape: SHAPES.CIRCLE,
        size: 15,
        from: {
          opacity: 0,
          transform: 'translate3d(-75%, 100%, 0) rotate(-360deg) scale(0)',
        },
        to: {
          opacity: 0.9,
          transform: 'translate3d(-75%, -20%, 0) rotate(0) scale(1)',
        },
        config: config.slow,
      },
    ],
  };

  render() {
    const {shapes} = this.state;

    return (
      <StyledContainer>
        <StyledInner>
          {shapes.map((shape, index) => (
            <Spring key={shapes[index].id} native {...shapes[index]}>
              {styles => <StyledCircle {...shapes[index]} styles={styles} />}
            </Spring>
          ))}
        </StyledInner>
      </StyledContainer>
    );
  }
}

export default Terrazzo;
