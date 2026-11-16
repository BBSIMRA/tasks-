//  const numbers = [10, 20, 30, 40];

//  let sum = 0;

//  for (let num of numbers) {
//      sum += num;
//  }

//  let average = sum / numbers.length;

//  console.log({sum, average});


function calculate(numbers:number[]) {
    let sum = numbers.reduce((total,num)=>{
        return total +num },0);
    let average = sum/ numbers.length;
    return{sum,average};
}
console.log(calculate([1,2,3,4,5]));