import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  display: block;
  text-indent: ${props => props.theme.emSizes[10]};
  padding-bottom: ${props => props.theme.emSizes[1]};
  font-size: ${props => props.theme.fontSizes[1]};

  &:first-child {
    text-indent: 0;
  }
`;

export default Text;
