//                                                        Custom
// 1. Via `interface`
interface User {
  name: string;
  id: number;
}

// 1.1 Valid for
// 1.1.1 Object
//      Create an object based on this interface
const userViaObject: User = {        // : User       is the key
  name: "Hayes",
  id: 0,
};
// If you try to create an object based on the interface wrongly -> you get an error -- uncomment next lines --
/*const userWronglyDeclared: User = {
  name: "Alfred",
}*/
// 1.1.2 Classes
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const userViaClass: User = new UserAccount("Murphy", 1);

// 1.2 Uses
// 1.2.1 function's arguments
function deleteUser(user: User) {
  // ...
}
// 1.2.2 function's returned values
function getAdminUser(): User {
  return userViaClass;
}



// 2. Via `type`
type UserType = {       // vs interface, here you use `=`
  name: string;
  id: number;
}
// 2.1 Valid for
// 2.1.1 Object
//      Create an object based on this interface
const userViaType: UserType = {        // : UserType       is the key
  name: "Hayes",
  id: 0,
};
// 2.1.2 NOT for classesObject
//      Create an object based on this type     -- uncomment next line to check --
//const userViaType: UserType = new UserAccount("Murphy", 1);