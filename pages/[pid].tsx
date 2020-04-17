import React from 'react';
import ReactMarkdown from 'react-markdown';
import {formatDate} from '../utlities/formatDate';

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
} from '../components';
// eslint-disable-next-line shopify/strict-component-boundaries
import {Container} from '../components/Scene/components';

interface Props {
  post: any;
}
function Post({post}: Props) {
  const {title, heading, content, date, color, slug, more} = post || {};

  const contentMarkup = post ? (
    <Content>
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
            Completed {formatDate(date)}
            <br />
            <A external href={more}>
              View live
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
