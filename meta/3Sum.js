/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    //sort the array
    nums.sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length;i++){
        let a = nums[i];
        
        //remove duplicates
        if(i>0 && nums[i] == nums[i-1])continue;
        let j=i+1, k = nums.length-1;
        
        while(j < k ){
            let b = nums[j], c = nums[k];
            let sum = a+b+c;
            if(sum == 0){
                result.push([a,b,c]);
                j++;
                k--;
                //remove duplicates
                while(j<k && nums[j] == nums[j-1])j++;
            }
            else if(sum < 0){
                j++;
            }else{
                k--;
            }
        }
    }
    return result;
};