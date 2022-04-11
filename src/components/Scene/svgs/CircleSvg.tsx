import React from 'react';
// @ts-ignore
import {PatternLines, PatternWaves} from '@visx/pattern';
import {withTheme, DefaultTheme} from 'styled-components';

import {makeCircleSvg} from './utilities';

export enum Fill {
  LinearGradient = 'linearGradient',
  Waves = 'waves',
  DiagonalLines = 'diagonalLines',
}

interface Props {
  size: number;
  fill: Fill;
  filter: 'dropShadow' | 'none';
  theme: DefaultTheme;
}

function CircleSvg({size, fill, filter, theme}: Props) {
  const path = makeCircleSvg(size);

  let fillMarkup;

  switch (fill) {
    case Fill.Waves:
      fillMarkup = (
        <PatternWaves
          id={Fill.Waves}
          height={10}
          width={10}
          fill="transparent"
          stroke="black"
          strokeWidth={0.4}
          complement
        />
      );
      break;
    case Fill.DiagonalLines:
      fillMarkup = (
        <PatternLines
          id={Fill.DiagonalLines}
          height={8}
          width={8}
          stroke="black"
          strokeWidth={0.2}
          orientation={['diagonal']}
        />
      );
      break;

    case Fill.LinearGradient:
      fillMarkup = (
        <linearGradient
          id={Fill.LinearGradient}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor={theme.siteBackgroundColor}
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={theme.colors.grey[0]}
            stopOpacity="0"
          />
        </linearGradient>
      );
      break;
    default:
      fillMarkup = null;
      break;
  }

  const filterMarkup =
    filter === 'dropShadow' ? (
      <filter id="dropShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation={Math.floor(size / 20)} />
        <feOffset dx="0" dy={Math.floor(size / -30)} />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.1" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    ) : (
      'none'
    );
  return (
    <>
      <defs>
        {filterMarkup}
        {fillMarkup}
      </defs>

      <g fillRule="evenodd">
        <path {...path} fill={`url(#${fill})`} filter={`url(#${filter})`} />
      </g>
    </>
  );
}

export default withTheme(CircleSvg);
