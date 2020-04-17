import styled from 'styled-components';
import {respondTo} from '../../styles/utils';

interface BlockProps {
  offSet?: boolean;
  hard?: boolean;
}

const Block = styled.div<BlockProps>`
  padding: ${props => (props.hard ? '0' : '0 10vw 5vh 5vw')};
  width: 100%;
  ${respondTo.md`
    width: ${(props: BlockProps) => (props.offSet ? `50vw;` : `85vw;`)};
  `}
  }
`;
export default Block;
