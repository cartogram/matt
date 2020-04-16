import React from 'react';
import styled from 'styled-components';
import {respondTo} from '../../styles/utils';
import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';
import {formatDate} from '../../utlities/formatDate';

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;

  ${respondTo.md`
    flex-direction: row;
  `}
`;

interface Item {
  slug?: string;
  title: string;
  tags?: string[];
  date?: string;
  label?: string;
  permalink?: string;
  onGoing?: boolean;
  small?: boolean;
}

interface Props {
  item: Item;
  small?: boolean;
}

function Item({
  small,
  item: {title, slug, tags, date, permalink, onGoing, label},
}: Props) {
  const formattedDate = date ? formatDate(date) : '';
  const formattedOngoing = onGoing ? '→Now' : '';
  const formattedTags = tags ? tags : [];
  const tagsMarkup = (
    <Footnote>
      {formattedTags.join(', ')}
      {formattedDate}
      {formattedOngoing}
    </Footnote>
  );

  const labelMarkup = label && <Footnote>{label}</Footnote>;
  const textMarkup = small ? (
    <Footnote>{title}</Footnote>
  ) : (
    <Heading>{title}</Heading>
  );

  const linkMarkup = permalink ? (
    <A external href={permalink}>
      {textMarkup}
    </A>
  ) : (
    <A href="/[pid]" as={`/${slug}`}>
      {textMarkup}
    </A>
  );
  return (
    <StyledItem>
      {linkMarkup}
      {tagsMarkup}
      {labelMarkup}
    </StyledItem>
  );
}

export default Item;
