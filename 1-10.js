// 单向链表定义
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * 1
 * 两数之和(双重循环)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length - 1; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
           if (nums[i] + nums[j] == target) {
               return [i,j];
           }
        }
    }
};
/**
 * 1
 * 两数之和(单循环记录)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
    let newArr = [];

    for (let i = 0; i < nums.length; i++){

        let num = target - nums[i];

        if (newArr.indexOf(nums[i]) > -1){
            return [newArr.indexOf(nums[i]),i]
        }

        newArr.push(num);
    }
};
/**
 * 2 两数相加(转换为数字，当用例过大时会出错)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {


    function listToNum(l) {
        let result = 0;
        let count = 0;

        while (l != null) {
            result = result + l.val * Math.pow(10,count);
            l = l.next;
            count ++;
        }

        return result;
    }

    let num  = listToNum(l1) + listToNum(l2);
    let containerListNode = new ListNode(null);
    let listNode = containerListNode;

    if (num === 0) {
        return new ListNode(0);
    }

    while (num > 0) {
       let placeNum = num % 10;

       listNode.next = new ListNode(placeNum);
       listNode = listNode.next;

       num = parseInt(num / 10);
    }
    return containerListNode.next;

};

function listToNum(l) {
    let result = 0;
    let count = 0;

    while (l != null) {
        result = result + l.val * Math.pow(10,count);
        l = l.next;
        count ++;
    }

    return result;
}
/**
 * 2 两数相加(不转换)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function(l1, l2) {
    let nl1 = l1;
    let nl2 = l2;
    let carryBit = 0;
    let containNode = new ListNode('f');
    let listNode = containNode;

    while (nl1 != null && nl2 != null) {

        listNode.next = new ListNode((nl1.val + nl2.val + carryBit) % 10);
        listNode = listNode.next;

        carryBit = parseInt((nl1.val + nl2.val + carryBit) / 10);
        nl1 = nl1.next;
        nl2 = nl2.next;
    }

    let continueL =  nl1 == null ? nl2 : nl1;

    while (continueL != null) {

        listNode.next = new ListNode((continueL.val + carryBit) % 10);
        listNode = listNode.next;

        carryBit = parseInt((continueL.val + carryBit) / 10);
        continueL = continueL.next;
    }
    if (carryBit !== 0) {
        listNode.next = new ListNode(carryBit % 10);
    }

    return  containNode.next;
    
};
/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strArr = s.split('');
    let charMap = {};
    let maxCount = 0;
    let count = 0;
    for(let i = 0; i < strArr.length; i ++) {
        if (charMap.hasOwnProperty(strArr[i])) {
            i = charMap[strArr[i]];
            charMap = {};
            count = 0;
        } else {
            charMap[strArr[i]] = i;
            count ++;
            if(maxCount < count) {
                maxCount = count;
            }
        }
    }
    return maxCount;
    
};
/**
 * 4 寻找两个有序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let i = 0;
    let j = 0;
    let count = 0;
    let resultArr = [];


    // 数组中数据的总个数是否是偶数
    let flag = (nums1.length + nums2.length) % 2 === 0;
    let totalLength = nums1.length + nums2.length;

    let result;


    while(i < nums1.length && j < nums2.length) {

        if(nums1[i] <  nums2[j]){
            resultArr.push(nums1[i]);
            i ++;
        } else {
            resultArr.push(nums2[j]);
            j ++;
        }

        count ++;

        if(flag) {
          if(count === totalLength / 2 + 1) {
            result = (resultArr[count - 1] + resultArr[count - 2]) / 2;
          } 
        } else {
            result = resultArr[parseInt(totalLength / 2)];
        }

    }

    if(i === nums1.length) {

        for(let m = j; m < nums2.length; m ++) {
            resultArr.push(nums2[m]);
            count ++;
            if(flag) {
                if(count === totalLength / 2 + 1) {
                  result = (resultArr[count - 1] + resultArr[count - 2]) / 2;
                } 
              } else {
                  result = resultArr[parseInt(totalLength / 2)];
              }
        }
    } else {
        for(let m = i; m < nums1.length; m ++) {
            resultArr.push(nums1[m]);
            count ++;
            if(flag) {
                if(count === totalLength / 2 + 1) {
                  result = (resultArr[count - 1] + resultArr[count - 2]) / 2;
                } 
              } else {
                  result = resultArr[parseInt(totalLength / 2)];
              }
        }
    }

    return result;
    
};
/**
 * 5 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if(s == '') {
        return '';
    }
    if(s.length == 1) {
        return s;
    }

    let result = '';
    let length = 0;

    let sArr = s.split('');

    for(let i = 0; i < sArr.length - 1; i ++) {

        let count = 1;
       if(i == 0) {
        result = sArr[i];
        length = 1;
       }
        
        // 偶对称
        if(sArr[i] === sArr[i + 1]){

            let newResult = sArr[i] + sArr[i + 1];
            count = 2;
            for(let j = 1; i - j >= 0 && i + j + 1 <  sArr.length; j ++) {
                if(sArr[i - j] == sArr[i + j + 1]) {
                    count += 2;
                    newResult = sArr[i - j] + newResult + sArr[i + j + 1];
                
                } else{
                    break;
                }
            }
            if(count > length) {
                result = newResult;
                length = count;
            };            
        }

        // 奇对称
        if(i>0) {
            if(sArr[i - 1] === sArr[i + 1]) {
                let newResult = sArr[i - 1] + sArr[i] + sArr[i + 1];
                count = 3;
                for(let j = 2; i - j >= 0  && i + j <  sArr.length ; j ++) {
                    if(sArr[i - j] == sArr[i + j]) {
                        count += 2;
                        newResult = sArr[i - j] + newResult + sArr[i + j];
                    }else{
                        break;
                    }
                }
                if(count > length) {
                    result = newResult;
                    length = count;
                };  

            }
        }

    }


    return result;
};
/**
 * 6 z型变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    let result = '';
    let totalArr = [];

    for(let i = 0;i < numRows; i ++) {
        totalArr.push([]);
    }
    let strArr = s.split('');

    for(let i = 0; i <strArr.length; i ++) {
        let num = i % (2 * numRows - 2);


        // 为Z字形竖
        if (num < numRows) {
            totalArr[num].push(strArr[i]);
        }
        // 斜
         else {
            totalArr[(2 * numRows - 2) - num].push(strArr[i]);
        }
    }

    for(let i = 0; i < totalArr.length; i ++) {
        for(let j = 0; j < totalArr[i].length; j ++) {
            result += totalArr[i][j];
        }
    }
 
    return result;
};
