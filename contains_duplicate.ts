function containsDuplicate(nums: number[]): boolean {
    const uniqueNumbers = new Set(nums);

    return uniqueNumbers.size !== nums.length;
    
};
console.log(containsDuplicate([1,2,3,4,1,2]))