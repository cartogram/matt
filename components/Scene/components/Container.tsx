import styled from 'styled-components';
import {fillFlex, fill} from '../../../styles';

const Container = styled.div`
  ${fillFlex}
  &:before {
    ${fill};
    content: '';
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: overlay;
    background: ${props => props.theme.siteBackground};
  }
`;

export default Container;
