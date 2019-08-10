import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {respondTo} from '../../styles/utils';
import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const StyledItem = styled.li`
  list-style: none;
  display: flex;

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
}

interface Props {
  item: Item;
}

function Item({
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
  const textMarkup = <Heading>{title}</Heading>;

  const linkMarkup = permalink ? (
    <A href={permalink} target="_blank">
      {textMarkup}
    </A>
  ) : (
    <Link href="[pid]" as={`/${slug}`}>
      <A>{textMarkup}</A>
    </Link>
  );
  return (
    <StyledItem>
      {linkMarkup}
      {tagsMarkup}
      {labelMarkup}
    </StyledItem>
  );
}

function formatDate(initialDate: string) {
  const date = new Date(initialDate);
  const month = monthNames[date.getMonth()];
  const year = date
    .getFullYear()
    .toString()
    .slice(-2);

  return `—${month} ${year}`;
}

export default Item;
