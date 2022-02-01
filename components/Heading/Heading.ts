import styled from 'styled-components';

interface Props {}

const Heading = styled.h1<Props>`
  display: block;
  font-weight: normal;
  line-height: 1.3;
  font-size: ${props => props.theme.fontSizes[2]};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export default Heading;
