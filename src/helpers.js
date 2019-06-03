// Return a random Item from a list

function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const initialColors = ['purple', 'magenta', 'violet', 'pink'];

export { choice, initialColors };
