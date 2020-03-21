// // 1 - View how the variables and function are handled on execution
// // This first example shows the variables as undefined from the top

// console.log('name: ', name);
// console.log('handle: ', handle);
// console.log('getUser : ', getUser);

// var name = 'cole';
// var handle = '@kneekneemeow.com';

// function getUser(handle) {
//   var someUrl = 'http://blah';
//   return someUrl + handle;
// }

// console.log(getUser(handle));

// // 2 - View how the variables and function are handled on execution
// // This first example shows the variables become defined

// var name = 'cole';
// var handle = '@kneekneemeow.com';

// console.log('name: ', name);
// console.log('handle: ', handle);
// console.log('getUser : ', getUser);

// function getUser(handle) {
//   var someUrl = 'http://blah';
//   return someUrl + handle;
// }

// console.log(getUser(handle));

//// 3 - Something arcane. Visualize  functions popping on / off an execution stack
// function a() {
//   console.log('In function a');

//   function b() {
//     console.log('In function b');

//     function c() {
//       console.log('In function c');
//     }
//     c();
//   }
//   b();
// }
// a();

//// 4 - Scope example 1. "bar" is not in the same scope and will generate an error
// function foo() {
//   var bar = 'declared in foo';
// }

// foo();
// console.log(bar);

// // 5 - Scope example 2. "bar" is not in the same scope and will generate an error
// console.log('bar initial: ', bar);
// var bar = '';
// console.log('bar after declaration: ', bar);

// function foo() {
//   bar = 'declared in foo';
// }

// foo();
// console.log('bar after function call: ', bar);

// // 6 - Scope example 3. Scope chain, the name is changed dynamically
// function first() {
//   var name = 'Kyler';
//   console.log(name);
// }

// function second() {
//   var name = 'Emily';
//   console.log(name);
// }

// console.log(name);
// var name = 'Anya';
// first();
// second();
// console.log(name);
