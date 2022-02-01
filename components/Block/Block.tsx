import styled from 'styled-components';

import {respond} from '../../styles/utils';

interface BlockProps {
  stick?: boolean;
  offSet?: boolean;
  hard?: boolean;
}

const Block = styled.div<BlockProps>`
  padding: ${props => (props.hard ? '0' : '0 3.5em 5vh ')};
  width: 100%;
  @media ${respond.md} {
    width: ${(props: BlockProps) => (props.offSet ? `50%;` : `100%;`)};
  }

  @media ${respond.lg} {
    flex-direction: row;
  }

  p {
    max-width: ${(props: BlockProps) => (props.offSet ? `800px` : `100%;`)};
  }

  ${(props: BlockProps) => props.stick && `position: sticky; top: 0;`}
`;
export default Block;
