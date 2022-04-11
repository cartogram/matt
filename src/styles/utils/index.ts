export {default as reset} from './reset';
export {emBase, emCalc, remCalc} from './units';
export {respond, breakpoints} from './responsive';

export const fill = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const fillFlex = `
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function center({x, y} = {x: true, y: true}) {
  if (x && !y) {
    return `
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0%);
    `;
  }

  if (y && !x) {
    return `
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    `;
  }

  return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
}
