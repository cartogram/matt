export const emBase = 16;

enum Unit {
  Em = 'em',
  Rem = 'rem',
}
const calc = (unit: Unit) => (size: number) => `${size / emBase}${unit}`;

export const emCalc = calc(Unit.Em);
export const remCalc = calc(Unit.Rem);
