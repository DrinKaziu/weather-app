console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('second setTimeout works');
}, 0);

console.log('Finishing up');
