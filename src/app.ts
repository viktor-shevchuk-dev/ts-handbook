"use strict";

// function greeter(fn: (a: string) => void) {
//   fn('Hello world!');
// }
// function printToConsole(str: string) {
//   console.log(str);
// }
// greeter(printToConsole);

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//   fn('Hello world!');
// }
// function printToConsole(str: string) {
//   console.log(str);
// }
// greeter(printToConsole);

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSth(fn: DescribableFunction) {
//   console.log(fn.description + ' returned ' + fn(6));
// }
// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = 'default description';
// doSth(myFunc);

// type SomeObject = {};
// type SomeConstructor = { new (s: string): SomeObject };
// function fn(ctor: SomeConstructor) {
//   return new ctor('hello');
// }

// type CallOrConstruct = {
//   (n?: number): string;
//   new (s: string): Date;
// };
// interface CallOrConstruct {
//   (n?: number): string;
//   new (s: string): Date;
// }
// function fn(ctor: CallOrConstruct) {
//   console.log(ctor(10));
//   console.log(new ctor('10'));
// }
// fn(Date);

// function firstElement(arr:any[]){
//   return arr[0]
// }

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }
// const s = firstElement(['a', 'b']);
// const u = firstElement([]);

// function map<Input, Output>(
//   arr: Input[],
//   func: (arg: Input) => Output
// ): Output[] {
//   return arr.map(func);
// }
// const parsed = map(['1', '2'], (n) => parseInt(n));

// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   return a.length >= b.length ? a : b;
// }
// const longerArr = longest([1, 2], [1, 2, 3]);
// const longerStr = longest('alice', 'bob');
// // const notOK = longest(10, 100);
// console.log({
//   longerArr,
//   longerStr,
//   // notOK
// });

// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// }
// // 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// // and crashes here because arrays have
// // a 'slice' method, but not the returned object!
// console.log(arr.slice(0));

// function combine<Type>(arr1: Type[], arr2: Type[]) {
//   return arr1.concat(arr2);
// }
// const arr = combine<string | number>([1, 2, 3], ['hello']);
// console.log(arr);

// function firstElement1<Type>(arr: Type[]) {
//   return arr[0];
// }
// function firstElement2<Type extends any[]>(arr: Type) {
//   return arr[0];
// }
// const a = firstElement1([1, 2, 3]);
// const b = firstElement2([1, 2, 3]);

// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
//   return arr.filter(func);
// }
// function filter2<Type, Func extends (arg: Type) => boolean>(
//   arr: Type[],
//   func: Func
// ) {
//   return arr.filter(func);
// }

// function greet1<Str extends string>(s: Str) {
//   console.log('Hey, ' + s);
// }
// greet1('world');

// function greet2(s: string) {
//   console.log('Hello, ' + s);
// }

// function f(n: number = 10) {
//   console.log(n?.toFixed());
//   console.log(n?.toFixed(3));
// }
// f();
// f(10.9999);

// function makeData(timestamp: number): Date;
// function makeData(m: number, d: number, y: number): Date;
// function makeData(mOrTimeStamp: number, d?: number, y?: number) {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimeStamp, d);
//   } else {
//     return new Date(mOrTimeStamp);
//   }
// }
// const d1 = makeData(12345678);
// const d2 = makeData(5, 5, 5);
// // const d3 = makeData(1, 3); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// console.log({
//   d1,
//   d2,
//   //   d3
// });

// function fn(x: string): void;
// function fn(): void;
// function fn() {}
// fn();

// function fn(x: string): void;
// function fn(x: boolean): void;
// function fn(x: boolean | string) {}

// // function len(s: string): number;
// // function len(s: any[]): number;
// // function len(arr: any[] | string): number;
// // function len(x: any) {
// //   return x.length;
// // }

// function len(x: any[] | string) {
//   return x.length;
// }

// len("");
// len([0]);
// len(Math.random() > 0.5 ? "hello" : [9]);

// function doSomething(f: (a: number, b: number, c: number) => void) {
//   return f(1, 2, 3);
// }

// const args = [8, 5];
// const angle = Math.atan2(...args);

// // Inferred as 2-length tuple
// const args = [8, 5] as const;
// // OK
// const angle = Math.atan2(...args);

// function sum({ a, b, c }: { a: number; b: number; c: number }) {
//   console.log({ a, b, c });
// }

// interface ABC {
//   a: number;
//   b: number;
//   c: number;
// }
// type ABC = { a: number; b: number; c: number };

// function sum({ a, b, c }: ABC) {
//   console.log({ a, b, c });
// }

// type voidFunc = () => void;
// const f1: voidFunc = () => {
//   return true;
// };
// const f2: voidFunc = () => true;
// const f3: voidFunc = function () {
//   return true;
// };

// const v1 = f1();

// const v2 = f2();

// const v3 = f3();

// function f2(): void {
//   // @ts-expect-error
//   return true;
// }

// const f3 = function (): void {
//   // @ts-expect-error
//   return true;
// };

// // Allowed: Contextual void type ignores the returned value.
// [1, 2, 3].forEach(() => {
//   return 123; // No error, but value is unused.
// });
