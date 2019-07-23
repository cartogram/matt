import React from 'react';
import styled from 'styled-components';
import {twoLiner, title, links, posts} from '../../content';
import Text from '../Text';
import H4 from '../H4';
import H1 from '../H1';
import List from '../List';
import A from '../A';

const StyledContent = styled.section`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: -100vh;
  padding: ${props => props.theme.emSizes[18]}
    ${props => props.theme.emSizes[2]};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface RowProps {
  offSet?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${props => (props.offSet ? 'flex-end' : 'flex-start')};
  padding: 0 0 ${props => props.theme.emSizes[12]};
  max-width: 1300px;
  width: 100%;
`;

interface BlockProps {
  offSet?: boolean;
}

const Block = styled.div<BlockProps>`
  flex: 100% 0 1;
  padding: 0 ${props => props.theme.emSizes[2]}
    ${props => props.theme.emSizes[6]};
  max-width: ${props => (props.offSet ? '600px' : 'auto')};
  max-width: 100%;
  @media (min-width: 700px) {
    min-width: 600px;
    flex: ${props => (props.offSet ? `${(1 / 2) * 100}% 0 1` : 'auto')};
  }
`;

function Content() {
  return (
    <StyledContent>
      <Row offSet>
        <Block offSet>
          <H1>{title}</H1>
        </Block>
      </Row>
      <Row>
        <Block>
          <List items={posts} />
        </Block>
      </Row>
      <Row offSet>
        <Block offSet>
          <Text>{twoLiner}</Text>
          <H4>
            Currently at{' '}
            <A target="_blank" href="http://shopify.com">
              Shopify
            </A>
            , previously{' '}
            <A target="_blank" href="http://cartogram.ca">
              Cartogram
            </A>
            .
          </H4>
        </Block>
      </Row>
      <Row>
        <Block>
          <List items={links} />
        </Block>
      </Row>
    </StyledContent>
  );
}

export default Content;
