import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: normal;
  text-decoration: underline;
  font-size: ${props => props.theme.typography.fontSize.h1.base};
`;

export default H1;
