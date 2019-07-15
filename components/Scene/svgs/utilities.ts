export function makeCircleSvg(rad: number) {
  return {
    // eslint-disable-next-line id-length
    d: `M 200, 200 m -${rad}, 0 a ${rad}, ${rad} 0 1,0 ${rad *
      2},0 a ${rad}, ${rad} 0 1,0 -${rad * 2},0`,
  };
}
