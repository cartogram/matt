import React from 'react';
// import {useRouter} from 'next/router';
import {ThemeProvider} from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {formatDate} from '../utlities/formatDate';

import {posts} from '../content';
import {
  Text,
  RawHtml,
  Block,
  Row,
  Content,
  ContentInner,
  Footnote,
  LoadBar,
} from '../components';
// eslint-disable-next-line shopify/strict-component-boundaries
import {Container} from '../components/Scene/components';
import {theme} from '../styles';

interface Props {
  post: any;
}
function Post({post}: Props) {

  const {title, heading, content, date, color} = post || {};

  const contentMarkup = post ? (
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
  ) : (
    <LoadBar />
  );

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...overrideThemeColor(color),
      }}
    >
      <Container>{contentMarkup}</Container>
    </ThemeProvider>
  );
}

export default Post;

function getPostBySlug(args: string | string[]): Promise<any> {
  const slug = Array.isArray(args) ? args[0] : args;
  return Promise.resolve(posts.find(post => post.slug === slug));
}

Post.getInitialProps = async (ctx: any) => {
  const post = await getPostBySlug(ctx.query.pid);

  return {post};
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
