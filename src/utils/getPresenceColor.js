const colors = [
  'black',
  'red',
  'green',
  'blue',
  'cyan',
  'magenta',
  'yellow',
];

export default function getPresenceColor(colorSeed) {
  return colors[colorSeed % colors.length];
};
