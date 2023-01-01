function includes(array: number[] | string[], value: number | string): boolean {
  // Change code below this line
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
  // Change code above this line
}

console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
  includes([1, 2, 3, 4, 5], 3),
  includes([1, 2, 3, 4, 5], 17)
);
