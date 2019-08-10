import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {ThemeProvider} from 'styled-components';
import {posts} from '../content';
import {Text, Heading, A, Block, Row, Content, Scene} from '../components';
import {theme} from '../styles';

const Post = () => {
  const router = useRouter();
  const {pid} = router.query;
  const post = getPostBySlug(pid);

  if (!post) {
    return '404';
  }

  const {title, heading, content, color} = post;
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...overrideThemeColor(color),
      }}
    >
      <Scene>
        <Content>
          <Row offSet>
            <Block offSet>
              <Heading as="span">
                <Link href="/">
                  <A>{title}</A>
                </Link>
              </Heading>
            </Block>
          </Row>
          <Row>
            <Block>
              <Heading level={1}>{heading || title}</Heading>
            </Block>
          </Row>
          <Row offSet>
            <Block offSet>
              <Text>{content}</Text>
            </Block>
          </Row>
        </Content>
      </Scene>
    </ThemeProvider>
  );
};

export default Post;

function getPostBySlug(args: string | string[]) {
  const slug = Array.isArray(args) ? args[0] : args;
  return posts.find(post => post.slug === slug);
}

function overrideThemeColor(color?: string) {
  if (!color) {
    return {};
  }

  return {
    siteBackground: color,
    siteBackgroundColor: color,
  };
}
