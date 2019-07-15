import React from 'react';
import {animated} from 'react-spring';

function Animated({animationProps, transform, className, children, svg}: any) {
  if (svg) {
    return (
      <animated.svg
        className={className}
        style={{
          transform: (animationProps as any).xy.interpolate(transform),
          opacity: 1,
        }}
        version="1.1"
        viewBox="0 0 400 400"
      >
        {svg}
      </animated.svg>
    );
  }

  return (
    <animated.div
      className={className}
      style={{
        transform: (animationProps as any).xy.interpolate(transform),
        opacity: 1,
      }}
    >
      {children}
    </animated.div>
  );
}

export default Animated;
