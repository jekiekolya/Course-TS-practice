const pairs: [string, string][] = [
  ['name', 'Jack'],
  ['lastName', 'Jon'],
];
pairs.push(['1', '2']);
const data: [number, boolean, string] = [1, true, 'test'];

// --------CSV--------------------------
const doc: [string, string, number, Date][] = [];
doc.push(['jack', 'jo', 23, new Date(1999, 6, 15)]);

console.log(doc);
