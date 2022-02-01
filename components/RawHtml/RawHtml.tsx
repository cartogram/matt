import React from 'react';
import styled from 'styled-components';

import {respond} from '../../styles/utils';

const StyledRawHtml = styled.article`
  margin: auto;
  display: grid;
  padding: ${props =>
    `0 ${props.theme.emSizes[10]} ${props.theme.emSizes[12]}`};

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

  @media ${respond.md} {
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
  }

  li,
  p {
    font-weight: normal;
    padding-bottom: ${props => props.theme.emSizes[3]};
    font-size: ${props => props.theme.fontSizes[1]};
    max-width: 1000px;

    position: relative;
    line-height: 1.4;

    &:first-child,
    &:nth-child(2) {
      text-indent: 0;
    }

    @media ${respond.md} {
      width: 50%;
      left: 50%;
    }

  }

  }



  > span,
  pre,
  h2,
  h1 {
    padding-bottom: ${props => props.theme.emSizes[1]};
    font-size: ${props => props.theme.fontSizes[1]};

    @media ${respond.md} {
      position: relative;
      width: 50%;
      left: 50%;
    }
  }

  h2 {
    text-decoration: underline;
  }



`;

interface Props {
  children: React.ReactNode;
}

function RawHtml({children}: Props) {
  return <StyledRawHtml>{children}</StyledRawHtml>;
}

export default RawHtml;
