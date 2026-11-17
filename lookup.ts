type User = {
    id: number;
    name: string;
    age: number;
};
function buildLookup(users: User[]){
    let userLookup:{[id:number]:User} ={};
    for(const user of users) {
        userLookup[user.id] = user;
    }
    return userLookup;
}
const users: User[] = [
    { id: 101, name: "Simran", age: 22 },
    { id: 102, name: "Rahul", age: 24 },
    { id: 103, name: "Priya", age: 21 },
    { id: 104, name: "Arjun", age: 23 },
    { id: 105, name: "Neha", age: 25 }
];
 const userLookup = buildLookup(users);

 console.log(userLookup[105]);

