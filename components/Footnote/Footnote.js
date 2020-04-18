import styled from 'styled-components';
import {respondTo} from '../../styles/utils';

const Footnote = styled.span`
  display: block;
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[0]};
  margin-bottom: ${props => props.theme.fontSizes[0]};

  ${respondTo.lg`
  font-size: ${props => props.theme.textMaxSize};
`}
`;

export default Footnote;
