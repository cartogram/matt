import styled from 'styled-components';

const H3 = styled.h3`
  font-weight: normal;
  font-style: italic;
  font-family: ${props => props.theme.typography.fontFamilySerif};
  font-size: ${props => props.theme.typography.fontSize.h3.base};
`;

export default H3;
