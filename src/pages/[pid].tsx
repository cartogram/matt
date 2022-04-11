import React from 'react';
import ReactMarkdown from 'react-markdown';

import {posts} from '../content';
import {
  RawHtml,
  Content,
  Meta,
  LoadBar,
  Mast,
  FrontMatter,
  BackButton,
} from '../components';

interface Props {
  post: any;
}
function Post({post}: Props) {
  const {title, heading, content, color, date, video} = post || {};

  const videoSource = video ? `videos/${video}` : '';

  const contentMarkup = post ? (
    <Content>
      <Mast color={color} video={videoSource} />
      <FrontMatter date={date} title={title || heading} />
      <BackButton />
      <RawHtml>
        <ReactMarkdown>{content}</ReactMarkdown>
      </RawHtml>
      <Meta post={post} />
    </Content>
  ) : (
    <LoadBar />
  );

  return contentMarkup;
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
