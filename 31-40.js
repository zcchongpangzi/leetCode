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
// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        let position = Math.floor((left + right) / 2);
        if (nums[position] == target) {
            return position;
        }
        if (nums[position] > target) {
            right = position - 1;
        }
        if(nums[position] < target) {
            left = position + 1;
        }
    }

    if (nums[left] >= target) {
        return left;
    }
    if (nums[left] < target) {
        return left + 1;
    }
};

/**
 * 36. 有效的数独
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hArr = [];
    let vArr = [];
    let nArr = [];
    for(let i = 0; i < 9; i++) {
        hArr.push(new Array(9).fill(false));
        vArr.push(new Array(9).fill(false));
        nArr.push(new Array(9).fill(false));
    } 

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let val = board[i][j];
            let n = Math.floor(i/3) + 3 * Math.floor(j/3);
            if(val != '.') {
                if (hArr[i][val] == true || vArr[j][val] == true || nArr[n][val] == true){
                    return false;
                } else {
                    hArr[i][val] = true;
                    vArr[j][val] = true;
                    nArr[n][val] = true;
                }
            }
            
        }
    }
    return true;
};
let arr = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  isValidSudoku(arr);


//   38. 外观数列
// 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

var countAndSay = function(n) {
function readVal(num){
    let str = num.toString() + '&';
    let flag = str[0];
    let count = 0;
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] != flag) {
            res = res + count.toString() + flag.toString();
            flag = str[i];
            count = 1;
        } else {
            count ++;
        }
    }
    return res;
}

    let val = 0;
    for(let i = 0; i < n; i ++) {
        if(i == 0) {
            val = '1';
        } else {
            val = readVal(val);
        }
    }
    return val;
};
