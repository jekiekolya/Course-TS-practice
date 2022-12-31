type Status = 'ok' | 'loading' | 'error';

const staticX: Status = 'loading';

// --------------------------------------
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcome(person: [string | string] | string): number | string {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '));
    return 1;
  }
  console.log('Hello', person);
  return '123';
}
