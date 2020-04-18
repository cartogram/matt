import React from 'react';
import ReactMarkdown from 'react-markdown';

import {posts} from '../content';
import {
  Heading,
  RawHtml,
  Content,
  ContentInner,
  Footnote,
  LoadBar,
  A,
  Mast,
  Header,
} from '../components';
// eslint-disable-next-line @shopify/strict-component-boundaries
import {Container} from '../components/Scene/components';

interface Props {
  post: any;
}
function Post({post}: Props) {
  const {title, heading, content, color, slug, more} = post || {};

  const contentMarkup = post ? (
    <Content>
      <Header />
      <Mast color={color} video={`static/videos/${slug}.mp4`} />
      <ContentInner>
        <RawHtml>
          <Heading>
            <A href="" as="span">
              {heading || title}
            </A>
          </Heading>
          <ReactMarkdown escapeHtml={false} source={content} />
          <Footnote>
            <A variant="large-button" external href={more}>
              View live website <span>↗</span>
            </A>
          </Footnote>
        </RawHtml>
      </ContentInner>
    </Content>
  ) : (
    <LoadBar />
  );

  return <Container>{contentMarkup}</Container>;
}

export default Post;

function getPostBySlug(args: string | string[]): Promise<any> {
  const slug = Array.isArray(args) ? args[0] : args;
  return Promise.resolve(posts.find(post => post.slug === slug));
}

Post.getInitialProps = async (ctx: any) => {
  const post = await getPostBySlug(ctx.query.pid);

  return {post};
};
