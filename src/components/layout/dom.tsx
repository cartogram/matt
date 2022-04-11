import useStore from '@/helpers/store';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const StyledDom = styled.main`
  position: relative;
  z-index: 10;
`;

const Dom = ({children}) => {
  const ref = useRef(null);
  useEffect(() => {
    useStore.setState({dom: ref});
  }, []);

  return <StyledDom ref={ref}>{children}</StyledDom>;
};

export default Dom;
