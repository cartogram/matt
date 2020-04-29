import React from 'react';
import styled from 'styled-components';

import {respondTo} from '../../styles/utils';
import Heading from '../Heading';
import A from '../A';

interface Props {
  title: string;
}

const StyledFrontMatter = styled.div<Partial<Props>>`
  z-index: 1;
  top: 10vw;
  padding: ${props =>
    `0 ${props.theme.emSizes[10]} ${props.theme.emSizes[12]}`};

  ${respondTo.md`
    position: fixed;

    `}
`;

export default function FrontMatter({title}: Props) {
  return (
    <StyledFrontMatter>
      <Heading>
        <A href="">{title}</A>
      </Heading>
      <Heading>
        <A href="/">← Back</A>
      </Heading>
    </StyledFrontMatter>
  );
}
