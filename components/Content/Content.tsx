import styled from 'styled-components';

const Content = styled.main`
  padding: ${props => `0 0 ${props.theme.emSizes[10]}`};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Content;
