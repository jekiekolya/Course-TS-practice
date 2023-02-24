// enum ShapeKind {
//   Circle = 12, // 0
//   Square, // 1
// }

// const myNumber = ShapeKind.Circle;
// console.log(myNumber);

// interface myInterfaceCircle {
//   kind: ShapeKind.Circle;
//   circle: number;
// }

// interface myInterfaceSquare {
//   kind: ShapeKind.Square;
//   square: number;
// }

// const MyCircle: myInterfaceCircle = {
//   kind: 0,
//   circle: 12,
// };

// // --------------------------------------------------
// enum StatusCode {
//   ERROR = 500,
//   NOT_FOUND = 404,
//   NOT_AUTH = 403,
// }

// enum Grades {
//   Junior = 'junior',
//   Middle = 'middle',
//   Senior = 'senior',
// }

// function compareGrade(user: { level: Grades }) {
//   console.log(user.level === Grades.Junior);
// }

//  ---------------------- new -----------------------------

enum ShapeKind {
  Circle, // 0
  Square, // 1
}

const myShape = ShapeKind.Circle;

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

const circle1: Circle = {
  kind: 2,
  radius: 2,
};

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}

enum Grades {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}
