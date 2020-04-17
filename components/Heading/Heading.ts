import styled from 'styled-components';

interface Props {
  level?: Number;
}

const Heading = styled.h1<Props>`
  display: block;
  font-weight: normal;
  padding-bottom: ${props => props.theme.emSizes[1]};
  line-height: ${props => (props.level === 1 ? 1 : 'inherit')};
  font-size: ${props =>
    props.level === 1 ? props.theme.fontSizes[2] : props.theme.fontSizes[1]};
`;

export default Heading;
