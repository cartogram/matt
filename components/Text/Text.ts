import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  display: block;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  font-family: ${props => props.theme.typography.fontFamilySans.name};
  font-weight: ${props => props.theme.typography.fontFamilySans.weight};
  font-size: ${props => props.theme.typography.fontSize.p.base};
  padding-bottom: ${props => props.theme.emSizes[1]};
`;

export default Text;
