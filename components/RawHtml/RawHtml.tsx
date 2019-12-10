import React from 'react';
import styled from 'styled-components';

const StyledList = styled.article`
  width: 100%;
  display: flex;
`;

interface Props {
  children: React.ReactNode;
}

function RawHtml({children}: Props) {
  return <StyledList>{children}</StyledList>;
}

export default RawHtml;
