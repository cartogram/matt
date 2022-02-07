import styled from 'styled-components';

import {respond} from '../../styles';

interface RowProps {
  offSet?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  margin: 1em 0 3em;
  width: 100%;

  @media ${respond.md} {
    position: relative;
  }
  & & {
    padding: 0;
  }
`;

export default Row;
