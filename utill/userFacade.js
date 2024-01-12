function userFacade() {
  let users = [];
  let nextId = 1;

  function addUser(name) {
    const user = {
      id: nextId,
      name: name,
      payments: [],
    };

    users.push(user);
    nextId++;
  }

  function removeUser(id) {
    users = users.filter((user) => user.id !== id);
  }

  const getUser = (id) => {
    return users.find((user) => user.id === id);
  };

  const getAllUsers = () => {
    return users;
  }

  return { addUser, removeUser, getUser, getAllUsers };
}

let userMethods = userFacade(); // Invoke userFacade to get the object with methods
export default userMethods;
