var name = 'cole';
var handle = '@kneekneemeow.com';

console.log('name: ', name);
console.log('handle: ', handle);
console.log('getUser : ', getUser);

function getUser(handle) {
  var someUrl = 'http://blah';
  return someUrl + handle;
}

console.log(getUser(handle));

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
