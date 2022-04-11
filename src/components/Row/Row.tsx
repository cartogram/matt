import styled from 'styled-components';

import {respond} from '../../styles';

interface RowProps {
  spaced?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: flex-end;
  margin: 1em 0 ${props => (props.spaced ? '3em' : '0')};
  width: 100%;

  @media ${respond.md} {
    position: relative;
  }

  & & {
    padding: 0;
  }
`;

export default Row;
