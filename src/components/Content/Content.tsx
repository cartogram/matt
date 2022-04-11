import styled from 'styled-components';

const Content = styled.main`
  padding: ${props => `${props.theme.emSizes[10]}`};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export default Content;
