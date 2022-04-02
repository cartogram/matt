import React from 'react';
import styled from 'styled-components';

import {respond} from '../../styles/utils';
import Heading from '../Heading';
import A from '../A';

interface Props {
  title: string;
}

const StyledFrontMatter = styled.div<Partial<Props>>`
  z-index: 1;
  width: 100%;
  padding: ${props =>
    `0 ${props.theme.emSizes[10]} ${props.theme.emSizes[12]}`};

  @media ${respond.md} {
    position: fixed;
  }
`;

export default function FrontMatter({title}: Props) {
  return (
    <StyledFrontMatter>
      <Heading>
        <A href="">{title}</A>
      </Heading>
    </StyledFrontMatter>
  );
}
