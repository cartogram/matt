import styled from 'styled-components';
import React from 'react';

import {respond} from '../../styles/utils/responsive';
import Text from '../Text';
import A from '../A';

interface Props {
  post: any;
}

const StyledMata = styled.div<Partial<Props>>`
  box-sizing: border-box;
  padding: 0 ${props => props.theme.emSizes[10]};
  position: relative;
  display: flex;

  @media ${respond.md} {
    justify-content: flex-end;
    > * {
      display: block;
      width: 50%;
    }
  }
`;

function Meta({post}: Props) {
  return post.more ? (
    <StyledMata>
      <Text>
        <A external href={post.more}>
          View live website
        </A>
      </Text>
    </StyledMata>
  ) : null;
}

export default Meta;
