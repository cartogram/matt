import React from 'react';
import styled from 'styled-components';
// import {Heading, A, Block, Row} from '../components';
import Heading from '../Heading';
import A from '../A';
import Block from '../Block';
import Row from '../Row';

interface Props {}

const StyledHeader = styled.div<Props>`
  font-weight: normal;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  padding-top: ${props => props.theme.emSizes[2]};
`;

export default function Header() {
  console.log('test');
  return (
    <StyledHeader>
      <Row>
        <Block>
          <Heading>
            <A href="/">Back</A>
          </Heading>
        </Block>
      </Row>
    </StyledHeader>
  );
}
