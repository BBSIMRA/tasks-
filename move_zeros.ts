// class Solution {
// public:
    function moveZeroes(nums :number[]) {
        let index:number = 0;

        for(let i:number =0;i < nums.length;i++) {
            if(nums[i] !== 0){
                nums[index] = nums[i];
                index++;
            }
        }
        while(index < nums.length){
            nums[index] = 0;
            index++;
        }
        
        // console.log(nums)
    }
    let nums:number[] = [0,3,0,8,15];
    moveZeroes(nums)
    console.log(nums)
