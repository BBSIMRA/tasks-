type Users = {
    id: number;
    name: string;
};

const user: Users[] = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Anjali" },
    { id: 3, name: "David" },
    { id: 4, name: "Simran" }
];
user.sort((a, b) => a.name.localeCompare(b.name));

console.log(user);