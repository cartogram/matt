/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

interface MastProps {
  offSet?: boolean;
  video: string;
}

const StyledMast = styled.div`
  padding: 10vw;
  width: 100%;
  text-align: center;
  background: #90ffed40;
  margin: 0 0 10em;

  video {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};
  }
`;

export default function Mast({video}: MastProps) {
  return (
    <StyledMast>
      <video autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
    </StyledMast>
  );
}
