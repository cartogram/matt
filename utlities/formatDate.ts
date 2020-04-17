interface Options {
  prefix: string;
}

export function formatDate(
  initialDate?: string,
  {prefix}: Options = {prefix: ''},
) {
  if (!initialDate) {
    return '';
  }

  const date = new Date(initialDate);
  const month = monthNames[date.getMonth()];
  const year = date
    .getFullYear()
    .toString()
    .slice(-2);

  return `${prefix}${month} ${year}`;
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
