import styled from 'styled-components';

const H2 = styled.h2`
  font-weight: normal;
  font-family: ${props => props.theme.typography.fontFamilySans};
  font-size: ${props => props.theme.typography.fontSize.h2.base};
`;

export default H2;
