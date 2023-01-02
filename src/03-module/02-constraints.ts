function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength('Hello');
getLength([12334]);
getLength({ length: 12 });
