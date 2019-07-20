import React from 'react';
import {Props} from '@shopify/useful-types';
import styled from 'styled-components';
import Item from './Item';

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${(props: Pick<ListProps, 'inline'>) =>
    props.inline ? 'row' : 'column'};
`;

interface ListProps {
  items: Props<typeof Item>['item'][];
  inline?: boolean;
}

function List({items, inline}: ListProps) {
  const postsMarkup = items.map(item => <Item key={item.title} item={item} />);

  return <StyledList inline={inline}>{postsMarkup}</StyledList>;
}

export default List;
