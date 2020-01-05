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
  ContentInner,
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
      <Container>
        <Content single>
          <Row offSet>
            <Block offSet>
              <Heading as="span">
                <A href="/">FourOHFour</A>
              </Heading>
            </Block>
          </Row>
        </Content>
      </Container>
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
          <ContentInner>
            <Row>
              <Block>
                <Text>{heading || title}</Text>
                <Footnote>{formatDate(date)}</Footnote>
              </Block>
            </Row>
            <RawHtml>
              <ReactMarkdown escapeHtml={false} source={content} />
            </RawHtml>
          </ContentInner>
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
