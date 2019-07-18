import styled from 'styled-components';

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.primaryColor};

  &:hover {
    text-decoration: underline;
  }
`;

export default A;
