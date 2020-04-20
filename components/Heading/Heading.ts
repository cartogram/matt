import styled from 'styled-components';

interface Props {
  level?: number;
}

const Heading = styled.h1<Props>`
  display: block;
  font-weight: normal;
  line-height: ${props => (props.level === 1 ? 1 : 'inherit')};
  font-size: ${props =>
    props.level === 1 ? props.theme.fontSizes[2] : props.theme.fontSizes[1]};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export default Heading;
