import React from 'react';
import Link from 'next/link';
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
              Currently Senior Developer on the{' '}
              <A
                target="_blank"
                href="http://github.com/shopify/web-foundation"
              >
                Web Foundation Team
              </A>{' '}
              at{' '}
              <A target="_blank" href="http://shopify.com">
                Shopify
              </A>
            </Footnote>
            <Footnote>
              Previously at{' '}
              <A target="_blank" href="http://cartogram.ca">
                Cartogram
              </A>
              ,{' '}
              <A target="_blank" href="http://catalystworkshop.com">
                Catalyst Workshop
              </A>
              , and{' '}
              <A target="_blank" href="http://barking.ca">
                Barking Dog Studios
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
      </Content>
    </Scene>
  );
}

export default Home;
