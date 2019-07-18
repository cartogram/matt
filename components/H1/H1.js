import styled from 'styled-components';

const H1 = styled.h1`
  z-index: 1;
  text-align: center;
  display: block;
  font-weight: normal;
  font-size: ${props => props.theme.typography.fontSize.h1.base};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-style: italic;
  position: relative;
`;

export default H1;
