type UserTransaction = {
    userId: number;
    amount: number;
};
function totalTransactions(usertransactions: UserTransaction[]) {
    let userTotal:{[userId: number] : number} ={};
    for(const transaction of usertransactions ) {
        if(userTotal[transaction.userId]) {
            userTotal[transaction.userId] += transaction.amount;
        } else {
            userTotal[transaction.userId] = transaction.amount;
        }
    }
    return userTotal;
}
const usertransactions: UserTransaction[]= [
    { userId: 101, amount: 200 },
    { userId: 102, amount: 150 },
    { userId: 101, amount: 300 },
    { userId: 103, amount: 400 },
    { userId: 102, amount: 250 },
    { userId: 101, amount: 100 }
];
console.log(totalTransactions(usertransactions));