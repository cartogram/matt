import React from 'react';
import styled from 'styled-components';
import {twoLiner, posts} from '../../content';
import Text from '../Text';
import List from '../List';

const StyledContent = styled.section`
  width: 100%;
  padding: 0 25vw 25vw;
  position: relative;
  z-index: 2;
`;

function Content() {
  return (
    <StyledContent>
      <List items={posts} />
      <Text>{twoLiner}</Text>
    </StyledContent>
  );
}

export default Content;
