export function formatDate(initialDate: string) {
  const date = new Date(initialDate);
  const month = monthNames[date.getMonth()];
  const year = date
    .getFullYear()
    .toString()
    .slice(-2);

  return `—${month} ${year}`;
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
