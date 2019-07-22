import styled from 'styled-components';

const H1 = styled.h1`
  z-index: 1;
  text-align: center;
  display: block;
  font-weight: normal;
  font-size: ${props => props.theme.typography.fontSize.h1.base};
  position: relative;
`;

export default H1;
