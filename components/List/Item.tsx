import React from 'react';
import styled from 'styled-components';
import {useMedia} from '@shopify/react-hooks';

import {respond} from '../../styles/utils';
import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';
import {formatDate} from '../../utlities/formatDate';

interface Props {
  active?: boolean;
}
const StyledItem = styled.li<Props>`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;

  > a {
    flex: 1;
    width: 100%;

    color: ${props =>
      props.active ? /* props.theme.colors.primary */ 'red' : 'inherit'};
  }

  @media ${respond.md} {
    > a {
      flex: initial;
      width: auto;
    }
  }
`;

interface Item {
  slug?: string;
  title: string;
  tags?: string[];
  date?: string;
  label?: string;
  permalink?: string;
  onGoing?: boolean;

  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface Props {
  item: Item;
  small?: boolean;
}

function Item({
  small,
  active,
  item: {title, slug, tags, date, permalink, onGoing, label, onClick},
}: Props) {
  const isSmallScreen = useMedia(respond.md);

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

  const linkProps = {};

  const linkMarkup = permalink ? (
    <A external href={permalink}>
      {textMarkup}
    </A>
  ) : (
    <A href="/[pid]" as={`/${slug}`} onClick={onClick}>
      {textMarkup}
    </A>
  );
  return (
    <StyledItem active={active}>
      {linkMarkup}
      {tagsMarkup}
      {labelMarkup}
    </StyledItem>
  );
}

export default Item;
