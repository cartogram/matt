import React from 'react';
import {Props} from '@shopify/useful-types';
import Item from './Item';

interface ListProps {
  items: Props<typeof Item>['item'][];
}

function List({items}: ListProps) {
  const postsMarkup = items.map(item => <Item key={item.title} item={item} />);

  return <div>{postsMarkup}</div>;
}

export default List;
