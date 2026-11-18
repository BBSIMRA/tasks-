type Transactions = {
    id: number;
    amount: number;
};

const transaction: Transactions[] = [
    { id: 1, amount: 500 },
    { id: 2, amount: 1200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 900 }
];
function findHighestTransaction(transaction: Transactions[]): Transactions | undefined {
    if (transaction.length === 0) {
        return undefined;
    }
    let highest = transaction[0];

    for (let i = 1; i < transaction.length; i++) {
        if (transaction[i].amount > highest.amount) {
            highest = transaction[i];
        }
    }
    return highest;
}
console.log(findHighestTransaction(transaction));