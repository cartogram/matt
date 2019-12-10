import React from 'react';
import {useRouter} from 'next/router';
import {ThemeProvider} from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {formatDate} from '../utlities/formatDate';

import {posts} from '../content';
import {
  Text,
  Heading,
  RawHtml,
  A,
  Block,
  Row,
  Content,
  Footnote,
} from '../components';
// eslint-disable-next-line shopify/strict-component-boundaries
import {Container} from '../components/Scene/components';
import {theme} from '../styles';

function Post() {
  const router = useRouter();
  const {pid} = router.query;
  const post = getPostBySlug(pid);

  if (!post) {
    return (
      <Content single>
        <Row offSet>
          <Block offSet>
            <Heading as="span">
              <A href="/">404</A>
            </Heading>
          </Block>
        </Row>
      </Content>
    );
  }

  const {title, heading, content, date, color} = post;
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...overrideThemeColor(color),
      }}
    >
      <Container>
        <Content single>
          <Row offSet>
            <Block offSet>
              <Heading as="span">
                <A href="/">Back</A>
              </Heading>
            </Block>
          </Row>
          <Row>
            <Block>
              <Text>
                <A href={`/${post.slug}`}>{heading || title}</A>
              </Text>
              <Footnote>{formatDate(date)}</Footnote>
            </Block>
          </Row>
          <Row offSet>
            <Block offSet>
              <RawHtml>
                <ReactMarkdown source={content} />
              </RawHtml>
            </Block>
          </Row>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Post;

function getPostBySlug(args: string | string[]) {
  const slug = Array.isArray(args) ? args[0] : args;
  return posts.find(post => post.slug === slug);
}

function overrideThemeColor(color?: string) {
  if (!color) {
    return {};
  }

  // return {
  //   siteBackground: color,
  //   siteBackgroundColor: color,
  // };
}
