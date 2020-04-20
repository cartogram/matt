import React from 'react';
import styled from 'styled-components';
import {useMedia} from '@shopify/react-hooks';

import {respondTo, breakpoints} from '../../styles/utils';
import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';
import {formatDate} from '../../utlities/formatDate';

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;

  > a {
    flex: 1;
    width: 100%;
  }

  ${respondTo.md`
  > a {
    flex: initial;
    width: auto;
  }
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
  const isSmallScreen = useMedia(`(max-width: ${breakpoints.md})`);

  const formattedDate = date ? formatDate(date, {prefix: '–'}) : '';
  const formattedOngoing = onGoing ? '→Now' : '';
  const formattedTags = tags ? tags : [];
  const tagsMarkup = isSmallScreen ? null : (
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
