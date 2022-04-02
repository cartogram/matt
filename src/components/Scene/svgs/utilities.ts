export function makeCircleSvg(rad: number) {
  return {
    d: `M 200, 200 m -${rad}, 0 a ${rad}, ${rad} 0 1,0 ${rad *
      2},0 a ${rad}, ${rad} 0 1,0 -${rad * 2},0`,
  };
}
