import styled from 'styled-components';

const Text = styled.p`
  font-weight: normal;
  display: block;
  text-indent: ${props => props.theme.emSizes[10]};
  font-size: var(--ft-size-medium);

  &:first-child {
    text-indent: 0;
  }
`;

export const TextPadding = styled.div`
  margin-bottom: var(--space-1rem);
  margin-top: 0;
`;

export default Text;
