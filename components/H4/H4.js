import styled from 'styled-components';

const H4 = styled.h4`
  font-weight: normal;
  font-family: ${props => props.theme.typography.fontFamilySans.name};
  font-weight: ${props => props.theme.typography.fontFamilySans.weight};
  font-size: ${props => props.theme.typography.fontSize.h4.base};
`;

export default H4;
