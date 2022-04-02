import styled from 'styled-components';

import {respond} from '../../styles';

interface Props {}

const Heading = styled.h1<Props>`
  display: block;
  font-weight: normal;
  line-height: 1.3;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  --space-1rem: 0.77em;
  font-family: sans-serif;
  font-size: var(--ft-size-heading);
`;

export default Heading;
