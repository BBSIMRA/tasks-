type Order = {
    orderId: number;
    status: string;
};
function statusCount(orders: Order[]) {
    let statusTotal:{[status: string]: number} ={};
    for(const order of orders){
        if(statusTotal[order.status]){
            statusTotal[order.status] ++;
        } else {
            statusTotal[order.status]=1;
        }
    }
      return statusTotal;
}
const orders: Order[] = [
    { orderId: 101, status: "pending" },
    { orderId: 102, status: "completed" },
    { orderId: 103, status: "failed" },
    { orderId: 104, status: "pending" },
    { orderId: 105, status: "completed" },
    { orderId: 106, status: "pending" },
    { orderId: 107, status: "failed" },
    { orderId: 108, status: "completed" },
    { orderId: 109, status: "pending" },
    { orderId: 110, status: "failed" }
];
console.log(statusCount(orders))