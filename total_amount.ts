type Transaction = {
    amount: number;
};

function calculateTotal(transactions: Transaction[]) {
    let total= transactions.reduce((sum, transaction) => {
        return sum + transaction.amount }, 0);
    return total;
}

const transactions: Transaction[] = [
    { amount: 100 },
    { amount: 250 },
    { amount: 150 },
    { amount: 500 }
];

console.log(calculateTotal(transactions));

