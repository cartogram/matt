import styled from 'styled-components';

interface RowProps {
  offSet?: boolean;
  hard?: boolean;
  soft?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  padding: ${props =>
    props.soft
      ? `${props.theme.emSizes[16]} 0 ${props.theme.emSizes[12]}`
      : `0 0 ${props.theme.emSizes[12]}`}};
  width: 100%;
  max-width: 2350px;
  margin: auto;
`;

export default Row;
