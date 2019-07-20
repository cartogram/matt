import styled from 'styled-components';

const H2 = styled.h2`
  font-weight: normal;
  max-width: 250px;
  font-family: ${props => props.theme.typography.fontFamilySans.name};
  font-weight: ${props => props.theme.typography.fontFamilySans.weight};
  font-size: ${props => props.theme.typography.fontSize.h2.base};
`;

export default H2;
