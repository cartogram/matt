import React from 'react';
import styled, {keyframes} from 'styled-components';

interface LoadBarProps {
  active?: boolean;
}
const animation = keyframes`
  to {
      background-position: 6px 0
  }
`;
const StyledLoadBar = styled.div<LoadBarProps>`
  position: absolute;
  width: 100%;
  text-align: center;
  height: 30px;
  transition: all 400ms ease;
  animation: 0.1s ${animation} linear infinite;
  background-repeat: repeat;
  background-size: 6px 6px;
  background-image: linear-gradient(
    -45deg,
    #000 15%,
    transparent 15%,
    transparent 51%,
    #000 45%,
    #000 65%,
    transparent 60%,
    transparent
  );
  transform: ${props =>
    props.active ? `translate(0,0)` : `translate(0, -100%)`};
`;

export default function LoadBar({active}: LoadBarProps) {
  return <StyledLoadBar active={active} />;
}

// const FadeInButton = styled.button`
//   animation: 1s ${fadeIn} ease-out;
// `;
// @-webkit-keyframes progress {
//   to {
//       background-position: 6px 0
//   }
// }

// @keyframes progress {
//   to {
//       background-position: 6px 0
//   }
// }

// .pace {
//   background: 0 0
// }

// .pace .pace-activity {
//   z-index: 10;
//   width: 100%;
//   -webkit-transition: all 200ms ease;
//   transition: all 200ms ease;
//   -webkit-animation: progress .1s linear infinite;
//   animation: progress .1s linear infinite;
//   height: 0;
//   background-repeat: repeat;
//   background-size: 6px 6px;
//   background-image: -webkit-linear-gradient(135deg,#00c 15%,transparent 15%,transparent 51%,#00c 45%,#00c 65%,transparent 60%,transparent);
//   background-image: linear-gradient(-45deg,#00c 15%,transparent 15%,transparent 51%,#00c 45%,#00c 65%,transparent 60%,transparent)
// }

// .pace.pace-inactive .pace-activity {
//   height: 0
// }

// .pace.pace-active .pace-activity {
//   height: 22px
// }

// .state-nav-is-shown .pace.pace-active .pace-activity {
//   height: 22px;
//   top: -webkit-calc(100% - 68px);
//   top: calc(100% - 68px);
//   position: fixed
// }
