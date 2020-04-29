import React from 'react';
import ReactMarkdown from 'react-markdown';

import {posts} from '../content';
import {
  RawHtml,
  Content,
  ContentInner,
  Meta,
  LoadBar,
  Mast,
  FrontMatter,
} from '../components';
// eslint-disable-next-line @shopify/strict-component-boundaries
import {Container} from '../components/Scene/components';

interface Props {
  post: any;
}
function Post({post}: Props) {
  const {title, heading, content, color, video} = post || {};

  const videoSource = video ? `static/videos/${video}` : '';

  const contentMarkup = post ? (
    <Content>
      <Mast color={color} video={videoSource} />
      <ContentInner>
        <FrontMatter title={title || heading} />
        <RawHtml>
          <ReactMarkdown escapeHtml={false} source={content} />
        </RawHtml>
        <Meta post={post} />
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
