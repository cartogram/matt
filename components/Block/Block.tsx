import styled from 'styled-components';

import {respondTo} from '../../styles/utils';

interface BlockProps {
  offSet?: boolean;
  hard?: boolean;
}

const Block = styled.div<BlockProps>`
  padding: ${props => (props.hard ? '0' : '0 3.5em 5vh ')};
  width: 100%;
  max-width: ${(props: BlockProps) => (props.offSet ? `1300px;` : `100%;`)};
  ${respondTo.md`
    width: ${(props: BlockProps) => (props.offSet ? `70vw;` : `100%;`)};
  `}
  }
`;
export default Block;
