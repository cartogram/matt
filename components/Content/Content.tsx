import React from 'react';
import styled from 'styled-components';
import {twoLiner, title, links, posts} from '../../content';
import Text from '../Text';
import Footnote from '../Footnote';
import Heading from '../Heading';
import List from '../List';
import A from '../A';

const StyledContent = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: -100vh;
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface RowProps {
  offSet?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  padding: 0 0 ${props => props.theme.emSizes[12]};
  width: 100%;
`;

interface BlockProps {
  offSet?: boolean;
}

const Block = styled.div<BlockProps>`
  padding: 0 10vw 5vh 5vw;
  width: 100%;
  @media (min-width: 700px) {
    width: ${props => (props.offSet ? `55vw;` : `85vw;`)};
  }
`;

function Content() {
  return (
    <StyledContent>
      <Row offSet>
        <Block offSet>
          <Heading>{title}</Heading>
        </Block>
      </Row>
      <Row>
        <Block>
          <List items={posts} />
        </Block>
      </Row>
      <Row offSet>
        <Block offSet>
          <Text>{twoLiner}</Text>
          <Footnote>
            Currently at{' '}
            <A target="_blank" href="http://shopify.com">
              Shopify
            </A>
            , previously{' '}
            <A target="_blank" href="http://cartogram.ca">
              Cartogram
            </A>
            .
          </Footnote>
        </Block>
      </Row>
      <Row>
        <Block>
          <List items={links} />
        </Block>
      </Row>
    </StyledContent>
  );
}

export default Content;
