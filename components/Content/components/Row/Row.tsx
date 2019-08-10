import styled from 'styled-components';

interface RowProps {
  offSet?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  padding: 0 0 ${props => props.theme.emSizes[12]};
  width: 100%;
`;

export default Row;
