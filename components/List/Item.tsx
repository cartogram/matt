import React from 'react';
import Link from 'next/link';
import {H2, A} from '..';

interface Item {
  title: string;
  tags: string[];
}

interface Props {
  item: Item;
}

function Item({item: {title}}: Props) {
  return (
    <Link href={`/item?title=${title}`}>
      <A>
        <H2>{title}</H2>
      </A>
    </Link>
  );
}

export default Item;
