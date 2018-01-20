const colours = [
  'red',
  'pink',
  'purple',
  'blue',
  'green',
  'yellow',
  'orange',
  'brown',
  'darkGray',
  'black',
];

/**
 * Returns a random colour.
 */
export default function getRandomColour() {
  const randomNumber = Math.floor(Math.random() * Math.floor(colours.length));

  return colours[randomNumber];
}
