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
  ContentInner,
} from '../components';

function Home() {
  return (
    <Scene>
      <Content>
        <ContentInner>
          <Row offSet>
            <Block offSet>
              <Heading>
                <A href="/">{title || 'Matthew Seccafien'}</A>
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
                <br />
                Previously at{' '}
                <A external href="http://cartogram.ca">
                  Cartogram
                </A>{' '}
                and Catalyst Workshop.
              </Footnote>
              <List inline small items={links} />
            </Block>
          </Row>
        </ContentInner>
      </Content>
    </Scene>
  );
}

export default Home;
