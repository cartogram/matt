import React from 'react';
import styled, {keyframes, css} from 'styled-components';

import {respond} from '../../styles/utils';
import Footnote from '../Footnote';
import Heading from '../Heading';
import A from '../A';
import {formatDate} from '../../utlities/formatDate';

interface StyledProps {
  active?: boolean;
}

const linkShake = keyframes`
0%,to {
  transform: rotate(1deg)
}

25% {
  transform: rotate(0deg)
}

50% {
  transform: rotate(-1deg)
}

75% {
  transform: rotate(0deg)
}
`;

const StyledItem = styled.li<StyledProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: baseline;
  padding-right: 0.25em;
  position: relative;
  white-space: nowrap;

  > a {
    flex: 1;
    width: 100%;
  }

  span {
    ${props =>
      props.active
        ? css`
            animation: ${linkShake} 0.225s cubic-bezier(0.1, 0.6, 0.4, 1)
              infinite;
          `
        : ''};
  }

  @media ${respond.md} {
    white-space: normal;
    > span,
    > a {
      flex: initial;
    }
  }
`;

const StyledMeta = styled.span`
  margin-top: var(--space-1rem);
  display: block;
  @media ${respond.sm} {
    display: none;
  }
`;

const StyledIcon = styled.i`
  font-style: normal;
  text-decoration: none;
  padding: 0 0.25em;
  position: absolute;
  left: 0;
  transform: translate(-100%, 0%);
  text-align: center;
`;

interface Item {
  slug?: string;
  title: string;
  tags?: string[];
  date?: string;
  icon?: string;
  label?: string;
  permalink?: string;
  onGoing?: boolean;
  active?: boolean;
  onMouseOut?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseOver?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

interface Props extends StyledProps {
  item: Item;
  small?: boolean;
}

function Item({
  small,
  item: {
    title,
    active,
    slug,
    tags,
    date,
    permalink,
    onGoing,
    label,
    icon,
    ...rest
  },
}: Props) {
  const formattedDate = date ? formatDate(date, {prefix: '–'}) : '';
  const formattedOngoing = onGoing ? '→Now' : '';
  const formattedTags = tags ? tags : [];
  const tagsMarkup = (
    <StyledMeta>
      <Footnote>
        {formattedTags.join(', ')}
        {formattedDate}
        {formattedOngoing}
      </Footnote>
    </StyledMeta>
  );

  const labelMarkup = label && <Footnote>{label}</Footnote>;
  const iconMarkup = icon && <StyledIcon>{icon}</StyledIcon>;
  const textMarkup = small ? (
    <Footnote>{title}</Footnote>
  ) : (
    <Heading>{title}</Heading>
  );

  let linkMarkup = <A {...rest}>{textMarkup}</A>;

  linkMarkup = permalink ? (
    <A external href={permalink} {...rest}>
      {textMarkup}
    </A>
  ) : (
    linkMarkup
  );

  linkMarkup = slug ? (
    <A href="/[pid]" as={`/${slug}`} {...rest}>
      {textMarkup}
    </A>
  ) : (
    linkMarkup
  );

  if (active) {
    console.log(title);
  }
  return (
    <StyledItem active={active}>
      {tagsMarkup}
      {iconMarkup}
      {linkMarkup}
      {labelMarkup}
    </StyledItem>
  );
}

export default Item;
