let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
}

asyncAdd(2, '9').then((sum) => {
  console.log('Result:', sum);
  return asyncAdd(sum, 33);
}).then((sum) => {
  console.log('New Result:', sum);
}).catch((errorMessage) => {
  console.log(errorMessage);
})


// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('Hey. it worked!!!')
//     reject('Unable to fulfill promise');
//   }, 2500)
// });
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Failure:', errorMessage);
// });
