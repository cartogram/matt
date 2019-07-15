import styled from 'styled-components';
import {fillFlex, fill} from '../../../styles';

function background(props: any) {
  const {images, siteBackgroundColor} = props.theme;
  return `url(${images.background}) ${siteBackgroundColor}`;
}

const Container = styled.div`
  ${fillFlex}
  &:before {
    ${fill};
    content: '';
    z-index: 1;
    mix-blend-mode: overlay;
    background: ${background};
  }
`;

export default Container;
