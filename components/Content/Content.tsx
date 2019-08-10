import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {twoLiner, title, links, posts} from '../../content';
import Text from '../Text';
import Footnote from '../Footnote';
import Heading from '../Heading';
import List from '../List';
import A from '../A';
import {Block, Row} from './components';

const StyledContent = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: calc(-100vh + 10em);
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Content() {
  return (
    <StyledContent>
      <Row offSet>
        <Block offSet>
          <Heading>
            <Link href="/">
              <A>{title}</A>
            </Link>
          </Heading>
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
