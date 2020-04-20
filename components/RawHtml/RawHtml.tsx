import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';

const StyledRawHtml = styled.article`
  margin: auto;
  display: grid;
  padding: 0 ${props => props.theme.emSizes[10]};

  .rh__grid {
    grid-gap: 30px;
    display: grid;
    padding: ${props => props.theme.emSizes[14]} 0;
    max-width: 2100px;
    margin: auto;
  }

  img {
    width: 100%;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};
  }

  ${respondTo.md`
    .rh__grid {
      grid-template-columns: 0.8fr 0.8fr 2fr 0.8fr 0.5fr 150px;
    }

    img {
      grid-column: 1/4;
    }

    img + img {
      grid-column: 4/7;
    }

    img + img {
      grid-column: 4/7;
    }

    .rh__grid.grid--two {
      img {
        grid-column: 1/5;
      }

      img + img {
        grid-column: 5/7;
      }
    }
  `}

  p {
    font-weight: normal;
    display: block;
    padding-bottom: ${props => props.theme.emSizes[3]};
    font-size: ${props => props.theme.fontSizes[1]};
    max-width: 1000px;

    position: relative;
    line-height: 1.4;

    &:first-child,
    &:nth-child(2) {
      text-indent: 0;
    }

    ${respondTo.md`
      width: 50%;
      left: 50%;
  `}

  }

  }

  > span,
  pre,
  h1 {
    padding-bottom: ${props => props.theme.emSizes[1]};

    ${respondTo.md`
    position: relative;
    width: 50%;
    left: 50%;
`}
  }
`;

interface Props {
  children: React.ReactNode;
}

function RawHtml({children}: Props) {
  return <StyledRawHtml>{children}</StyledRawHtml>;
}

export default RawHtml;
