import styled from 'styled-components';
import {respondTo} from '../../styles/utils';

interface BlockProps {
  offSet?: boolean;
}

const Block = styled.div<BlockProps>`
  padding: 0 10vw 5vh 5vw;
  width: 100%;
  ${respondTo.md`
    width: ${(props: BlockProps) => (props.offSet ? `55vw;` : `85vw;`)};
  `}
  }
`;
export default Block;
