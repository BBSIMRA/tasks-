function countCharacters(str: string[]) {
    let count:{[key: string]: number} = {};
    for (let char of str) {
        if(count[char]){
            count[char]++;
        } else{
            count[char] = 1;
        }
    }
    return count;
}
console.log(countCharacters("hello world"));