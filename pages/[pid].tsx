import React from 'react';
import {useRouter} from 'next/router';
import {Content, Scene} from '../components';

const Post = () => {
  const router = useRouter();
  const {pid} = router.query;

  console.log(pid);
  return (
    <Scene>
      <Content />
    </Scene>
  );
};

export default Post;
