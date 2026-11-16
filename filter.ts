type User = {
    name: string;
    age: number;
};

function filterUsers(users: User[]) {
    return users.filter(user => user.age >= 18)
      .map(user =>user.name);
}

const users: User[] = [
    { name: "John", age: 40 },
    { name: "Jane", age: 17 },
    { name: "Mike", age: 25 },
    { name: "Sara", age: 12 }
];

console.log(filterUsers(users));


// const users = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 16 },
//     { name: "Mike", age: 25 },
//     { name: "Sara", age: 11 }
// ];

// function filterUsers(users) {
//     return users
//         .filter( user => user.age >= 18)
//         .map( user =>user.name);
// }
// console.log(filterUsers(users));
 