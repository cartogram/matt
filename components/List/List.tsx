import React from 'react';
import {Props} from '@shopify/useful-types';
import styled from 'styled-components';
import Item from './Item';

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${(props: Pick<ListProps, 'inline'>) =>
    props.inline ? 'row' : 'column'};
  > * {
    padding: ${props =>
      props.inline ? `0 ${props.theme.fontSizes[0]} 0 0` : '0'};
  }
`;

interface ListProps {
  items: Props<typeof Item>['item'][];
  inline?: boolean;
  small?: boolean;
}

function List({items, inline, small}: ListProps) {
  const itemsMarkup = items.map(item => (
    <Item small={small} key={item.title} item={item} />
  ));

  return <StyledList inline={inline}>{itemsMarkup}</StyledList>;
}

export default List;
