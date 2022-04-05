import styled from 'styled-components';

import {respond} from '../../styles/utils';

interface BlockProps {
  stick?: boolean;
  offSet?: boolean;
  auto?: boolean;
}

const Block = styled.div<BlockProps>`
  width: 100%;

  @media ${respond.md} {
    width: 80%;
  }

  ${(props: BlockProps) =>
    props.auto &&
    `
    width: auto;
  `}

  ${(props: BlockProps) =>
    props.offSet &&
    `
    @media ${respond.md} {
      width: 50%;
    }
  `}
  ${(props: BlockProps) =>
    props.stick &&
    `
    display: none;
    width: auto;
    position: sticky;
    position: absolute;
    right: 0;
    top: 0;

    @media ${respond.sm} {
      display: block;
    }
  `};
`;
export default Block;
