'use strict';

// let myName: string | number = 'Alice';
// myName = 1;
// console.log(myName);

// function getFavoriteNumber() {
//   return 25;
// }

// async function getFavoriteNumberAsync(): Promise<number> {
//   return 26;
// }

// const names = ['Alice', 'Bob', 'Eve'];

// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });

// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });

// // The parameter's type annotation is an object type
// function printCoord(point: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + point.x);
//   console.log("The coordinate's y value is " + point.y);
// }
// printCoord({ x: 3, y: 7 });

// function printName(obj: { first: string; last?: string }) {
//   // console.log(obj.last.toUpperCase()); // Error - might crash if 'obj.last' wasn't provided!

//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// // Both OK
// printName({ first: 'Bob' });
// printName({ first: 'Alice', last: 'Alisson' });

// function printId(id: string | number) {
//   console.log('Your ID is: ' + id);
// }
// // OK
// printId(101);
// // OK
// printId('202');
// // Error
// // printId({ myID: 22342 });

// function printId(id: number | string) {
//   console.log(id.toUpperCase());
//   // Property 'toUpperCase' does not exist on type 'string | number'.
//   // Property 'toUpperCase' does not exist on type 'number'.
// }

// function printId(id: number | string) {
//   if (typeof id === 'string') {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log('Hello, ' + x.join(' and '));
//   } else {
//     // Here: 'x' is 'string'
//     console.log('Welcome lone traveler ' + x);
//   }
// }

// Return type is inferred as number[] | string
// function getFirstThree(x: number[] | string) {
//   return x.slice(0, 3);
// }

// type Point = { x: number; y: number };
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// type UserInputSanitizedString = string;

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return str;
// }

// // Create a sanitized input
// let userInput = sanitizeInput('');
// // Can still be re-assigned with a string though
// userInput = 'new input';

// const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas');

// const x = 'hello' as number;
// const x = 'hello' as any as number;

// function doSomething(x: string | null) {
//   if (x === null) {
//     // do nothing
//   } else {
//     console.log('Hello, ' + x.toUpperCase());
//   }
// }

// function doSomethingDangerously(x: number | null) {
//   console.log(x!.toFixed());
// }

// const firstName = Symbol('name');
// const secondName = Symbol('name');
// if (firstName === secondName) {
// This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
// Can't ever happen
// }

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction);

// enum UserResponse {
//   No,
//   Yes,
// }
// console.log(UserResponse);
// function respond(recipient: string, message: UserResponse) {
//   console.log({ message, recipient });
// }
// respond('Princess', UserResponse.Yes);

// enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
//   Left = 'LEFT',
//   Right = 'RIGHT',
// }
// console.log(Direction);

// enum E {
//   X,
// }
// console.log(E);

// enum FileAccess {
//   // constant members
//   None,
//   Read = 1 << 1,
//   Write = 1 << 2,
//   ReadWrite = Read | Write,
//   // computed member
//   G = '123'.length,
// }
// console.log(FileAccess);

// enum ShapeKind {
//   Circle,
//   Square,
// }
// interface Circle {
//   kind: ShapeKind.Circle;
//   radius: number;
// }
// interface Square {
//   kind: ShapeKind.Square;
//   sideLength: number;
// }
// let c: Circle = {
//   kind: ShapeKind.Square,
//   // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//   radius: 100,
// };

// enum E {
//   Foo,
//   Bar,
// }
// function f(x: E) {
//   if (x !== E.Foo || x !== E.Bar) {
//     // This comparison appears to be unintentional because the types 'E.Foo' and 'E.Bar' have no overlap.
//     //
//   }
// }

// enum LogLevel {
//   ERROR,
//   WARN,
//   INFO,
//   DEBUG,
// }
// console.log(LogLevel);
// type LogLevelStrings = keyof typeof LogLevel;
// function printImportant(key: LogLevelStrings, message: string) {
//   const num = LogLevel[key];
//   if (num <= LogLevel.WARN) {
//     console.log('Log level key is:', key);
//     console.log('Log level value is:', num);
//     console.log('Log level message is:', message);
//   }
// }
// printImportant('ERROR', 'This is a message');

// const enum Enum {
//   A = 1,
//   B = A * 2,
// }
// console.log(Enum.A);

// const enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// let directions = [
//   Direction.Up,
//   Direction.Down,
//   Direction.Left,
//   Direction.Right,
// ];
// console.log(directions);

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
console.log(EDirection.Down, ODirection.Down);
// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the values
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
