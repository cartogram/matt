import React from 'react';
import styled from 'styled-components';

import Item from './Item';

interface ListProps {
  items: string[] | React.ComponentProps<typeof Item>['item'][];
  inline?: boolean;
  small?: boolean;
  right?: boolean;
}

const StyledList = styled.ul<Pick<ListProps, 'inline' | 'right'>>`
  display: flex;
  min-width: 5em;
  width: ${(props: Pick<ListProps, 'right'>) =>
    props.right ? 'auto' : '100%'};
  flex-direction: ${(props: Pick<ListProps, 'inline'>) =>
    props.inline ? 'row' : 'column'};
  > * {
    font-size: var(--ft-size-heading);
  }
`;

function List({items, right, inline, small}: ListProps) {
  const itemsMarkup = items.map((item, index) => {
    if (typeof item === 'string') {
      return (
        <Item
          // eslint-disable-next-line react/no-array-index-key
          key={`${item}--${index}`}
          item={{title: item, active: true}}
          small={small}
        />
      );
    }
    // eslint-disable-next-line react/no-array-index-key
    return <Item small={small} key={`${item.title}--${index}`} item={item} />;
  });

  return (
    <StyledList right={right} inline={inline}>
      {itemsMarkup}
    </StyledList>
  );
}

export default List;
