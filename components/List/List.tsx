import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: ${(props: Pick<ListProps, 'inline'>) =>
    props.inline ? 'row' : 'column'};
  > * {
    padding: ${props => `0 ${props.theme.fontSizes[0]} 0 0`}};
  }
`;

interface ListProps {
  items: string[] | React.ComponentProps<typeof Item>['item'][];
  inline?: boolean;
  small?: boolean;
}

function List({items, inline, small}: ListProps) {
  const itemsMarkup = items.map(item => {
    if (typeof item === 'string') {
      return <Item key={item} item={{title: item}} small={small} />;
    }
    return <Item active small={small} key={item.title} item={item} />;
  });

  return <StyledList inline={inline}>{itemsMarkup}</StyledList>;
}

export default List;
