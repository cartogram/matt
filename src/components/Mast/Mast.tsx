/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

interface MastProps {
  offSet?: boolean;
  video: string;
  color?: string;
}

const StyledMast = styled.div<Partial<MastProps>>`
  padding: 5vw;
  width: 100%;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: ${props => props.color || 'none'};
    top: 0;
    left: -5em;
    right: -5em;
    display: block;
    bottom: 0;
    transform: translateY(-25%);
  }

  video {
    background: ${props => (props.color ? props.color.slice(0, -2) : 'none')};
    position: relative;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};
    max-width: 1800px;
  }
`;

export default function Mast({video, color}: MastProps) {
  const videoMarkup = video ? (
    <video autoPlay loop>
      <source src={video} type="video/mp4" />
    </video>
  ) : null;
  return <StyledMast color={color}>{videoMarkup}</StyledMast>;
}
