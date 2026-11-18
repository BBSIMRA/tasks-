type Transaction = {
    id: number;
    amount: number;
};
const transactions: Transaction[] = [
    { id: 1, amount: 500 },
    { id: 2, amount: 1200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 900 }
];
transactions.sort((a, b) => b.amount - a.amount);

console.log(transactions);

