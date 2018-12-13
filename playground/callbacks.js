let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Drin'
  };

  setTimeout(() => {
    callback(user);
  }, 3000)
};

getUser(11, (userObject) => {
  console.log(userObject);
});
