/**
 * 31
 * 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {


    if (nums.length < 2) {
        return;
    }

    for (let i = nums.length - 1; i > 0; i --) {
        let j = i - 1;

        if (nums[j] < nums[i]) {
            let k = nums.length - 1;
            while (k > 0) {

                if (nums[j] < nums[k] ) {
                    let temp = nums[j];
                    nums[j] = nums[k];
                    nums[k] = temp;
                    let l = nums.length - 1
                    while (i < l) {
                        let temp1 = nums[i];
                        nums[i] = nums[l];
                        nums[l] = temp1;
                        i ++;
                        l --;
                    }
                    return;
                }
                k --;
            }
        }
    }

    let m = 0;
    let n = nums.length - 1;
    while (m < n) {
        let temp1 = nums[m];
        nums[m] = nums[n];
        nums[n] = temp1;
        m ++;
        n --;
    }
};
nextPermutation([1,3,2]);
