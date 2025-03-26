'use strict';

// function padLeft(padding: number | string, input: string): string {
//   return ' '.repeat(padding) + input;
//   // Argument of type 'string | number' is not assignable to parameter of type 'number'.
//   // Type 'string' is not assignable to type 'number'.
// }

// function padLeft(padding: number | string, input: string): string {
//   if (typeof padding === 'number') {
//     return ' '.repeat(padding) + input;
//   }
//   return padding + input;
// }

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === 'object') {
//     for (const s of strs) {
//       // 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === 'string') {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }

// both of these result in 'true'
// Boolean('hello'); // type: boolean, value: true
// !!'world'; // type: true,    value: true

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function move(animal: Fish | Bird) {
//   if ('swim' in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }
