import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  display: block;
  text-indent: ${props => props.theme.emSizes[10]};
  font-size: ${props => props.theme.fontSizes[1]};

  &:first-child {
    text-indent: 0;
  }
`;

export const TextPadding = styled.div`
  padding-bottom: ${props => props.theme.emSizes[1]};
`;

export default Text;
