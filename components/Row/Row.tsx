import styled from 'styled-components';

interface RowProps {
  offSet?: boolean;
  hard?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  padding: ${props =>
    props.hard
      ? `0 ${props.theme.emSizes[14]}`
      : `0 ${props.theme.emSizes[14]} ${props.theme.emSizes[12]}`};
  width: 100%;
`;

export default Row;
