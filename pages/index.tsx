import React from 'react';
import {twoLiner, title, links, posts} from '../content';
import {
  Text,
  Heading,
  List,
  A,
  Footnote,
  Block,
  Row,
  Content,
  Scene,
} from '../components';

function Home() {
  return (
    <Scene>
      <Content>
        <Row offSet>
          <Block offSet>
            <Heading>
              <A href="/">{title}</A>
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
            <Text dangerouslySetInnerHTML={{__html: twoLiner}} />
            <Footnote>
              Currently Senior Developer on the{' '}
              <A external href="http://github.com/shopify/web-foundation">
                Web Foundation Team
              </A>{' '}
              at Shopify.
            </Footnote>
            <Footnote>
              Previously at{' '}
              <A external href="http://cartogram.ca">
                Cartogram
              </A>{' '}
              and Catalyst Workshop.
            </Footnote>
          </Block>
        </Row>
        <Row>
          <Block>
            <List items={links} />
          </Block>
        </Row>
      </Content>
    </Scene>
  );
}

export default Home;
