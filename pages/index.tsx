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
          <Row offSet soft>
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
                Currently working on Incident Response and Resiliency at Shopify
                <br />
                Previously Senior Front-end Developer on the{' '}
                <A external href="http://github.com/shopify/web-foundation">
                  Web Foundation Team
                </A>
                <br />
                Co-founder of{' '}
                <A external href="http://cartogram.ca">
                  Cartogram
                </A>{' '}
                and{' '}
                <A external href="http://fondfolio.com">
                  Fondfolio
                </A>
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
