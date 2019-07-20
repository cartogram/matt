import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import H4 from '../H4';
import H2 from '../H2';
import A from '../A';

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  width: 100%;
  padding-right: ${props => props.theme.emSizes[0]};

  &:after {
    background: black;
    top: -3px;
    position: relative;
    height: 1px;
    flex-grow: 2;
    content: '';
  }

  > :last-child {
    order: 1;
  }
`;

interface Item {
  title: string;
  tags?: string[];
}

interface Props {
  item: Item;
}

function Item({item: {title, tags}}: Props) {
  const tagsMarkup =
    tags && tags.length ? tags.map(tag => <H4 key={tag}>{tag}</H4>) : null;
  return (
    <StyledItem>
      <Link href={`/item?title=${title}`}>
        <A>
          <H2>{title}</H2>
        </A>
      </Link>
      {tagsMarkup}
    </StyledItem>
  );
}

export default Item;
