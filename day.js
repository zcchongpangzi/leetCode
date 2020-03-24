/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

// 注意你不能在买入股票前卖出股票。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let inPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (profit < prices[i] - inPrice) {
      profit = prices[i] - inPrice;
    }
    if (prices[i] < inPrice) {
      inPrice = prices[i];
    }
  }
  return profit;
};

// 543. 二叉树的直径
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

// 示例 :
// 给定二叉树

//           1
//          / \
//         2   3
//        / \
//       4   5
// 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

// 注意：两结点之间的路径长度是以它们之间边的数目表示。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0;
  setDeep(root);
  function setDeep(root) {
    if (root !== null) {
      let left = setDeep(root.left);
      let right = setDeep(root.right);

      if (max < right + left) {
        max = right + left;
      }

      return Math.max(right, left) + 1;
    }
    return 0;
  }

  return max;
};
// 1013. 将数组分成和相等的三个部分
// 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

// 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

// 示例 1：

// 输出：[0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// 示例 2：

// 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false
// 示例 3：

// 输入：[3,3,6,5,-2,2,5,1,-9,4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  if (A.length < 3) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  if (sum % 3 === 0) {
    let sum1 = 0;
    for (let i = 0; i < A.length - 2; i++) {
      sum1 += A[i];
      let sum2 = 0;
      for (let j = i + 1; j < A.length - 1; j++) {
        sum2 += A[j];

        if (sum1 === sum2) {
          let sum3 = 0;
          for (let k = j + 1; k < A.length; k++) {
            sum3 += A[k];
          }
          if (sum2 === sum3) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
/**
 * 前后指针法
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum2 = function(A) {
  if (A.length < 3) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  if (sum % 3 === 0) {
    let sum1 = 0;

    for (let i = 0; i < A.length; i++) {
      sum1 += A[i];
      if (sum1 === sum / 3) {
        let sum2 = 0;
        for (let j = A.length - 1; j > i + 1; j--) {
          sum2 += A[j];

          if (sum1 === sum2) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// 1071. 字符串的最大公因子
// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

// 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

//

// 示例 1：

// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"
// 示例 2：

// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"
// 示例 3：

// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let gcd = function(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  };
  if (str1 + str2 != str2 + str1) {
    return "";
  } else {
    return str1.substring(0, gcd(str1.length, str2.length));
  }
};

// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1:

// 输入: [3,2,3]
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      result = nums[i];
      count++;
    } else {
      nums[i] == result ? count++ : count--;
    }
  }
  return result;
};

// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let arrS = S.split("");

  if (arrS.length == 0) {
    return S;
  }
  // 尾部哨兵对象
  arrS.push(0);
  let flag = arrS[0];
  let count = 1;
  let result = "";

  for (let i = 1; i < arrS.length; i++) {
    if (flag != arrS[i]) {
      result += flag + count;
      flag = arrS[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (result.length >= S.length) {
    return S;
  }

  return result;
};

// 1160. 拼写单词
// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

// 注意：每次拼写时，chars 中的每个字母都只能用一次。

// 返回词汇表 words 中你掌握的所有单词的 长度之和。

// 示例 1：

// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释：
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
// 示例 2：

// 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// 输出：10
// 解释：
// 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let wordMap = {};
  for (let i = 0; i < chars.length; i++) {
    if (wordMap[chars[i]]) {
      wordMap[chars[i]] += 1;
    } else {
      wordMap[chars[i]] = 1;
    }
  }
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    let tempWordMap = {};
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (tempWordMap[words[i][j]]) {
        tempWordMap[words[i][j]] += 1;
      } else {
        tempWordMap[words[i][j]] = 1;
      }

      if (wordMap[words[i][j]]) {
        if (wordMap[words[i][j]] < tempWordMap[words[i][j]]) {
          flag = false;
          break; //
        }
      } else {
        flag = false;
        break; // 这两个break加上后，整个测试用例跑完,从800ms减少到300ms...代码细节真的很重要
      }
    }

    if (flag) {
      result += words[i].length;
    }
  }

  return result;
};

// 这个题目刚开始想复杂了，写了方法算某个点是否在矩形内来判断相交，其实取反就可以了

// 836. 矩形重叠
// 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

// 如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

// 给出两个矩形，判断它们是否重叠并返回结果。

// 示例 1：

// 输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// 输出：true
// 示例 2：

// 输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// 输出：false
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  return !(
    (rec2[1] >= rec1[3] && rec2[3] > rec1[3]) ||
    (rec2[0] >= rec1[2] && rec2[2] > rec1[2]) ||
    (rec2[3] <= rec1[1] && rec2[1] < rec1[1]) ||
    (rec2[2] <= rec1[0] && rec2[0] < rec1[0])
  );
};
// 面试题40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
 /**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    function quikSort(arr, left, right) {
        if(left >= right) {
            return;
        }
        let pivot = arr[left]
        let i = left;
        let j = right;
    
    
        while(i < j) {
            while(i < j && arr[j] >= pivot) j--
            arr[i] = arr[j]
            while(i < j && arr[i] < pivot) i++
            arr[j] = arr[i]
        }
        arr[i] = pivot
        quikSort(arr,left, i - 1);
        quikSort(arr,i + 1, right);
    }
        let result = [];
        quikSort(arr,0,arr.length - 1);
        for(let i = 0; i < k; i ++) {
            result.push(arr[i]);
        }
        return result;
    };



//     945. 使数组唯一的最小增量
// 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

// 返回使 A 中的每个值都是唯一的最少操作次数。

// 示例 1:

// 输入：[1,2,2]
// 输出：1
// 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
// 示例 2:

// 输入：[3,2,1,2,1,7]
// 输出：6
// 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
// 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。

/**
 * 排序后逐个递增
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  if(A.length == 0 || A.length == 1) {
      return 0;
  }
  A.sort((a,b)=>a-b);
  let i = 1;
  let result = 0;

  while(i < A.length) {
      if(A[i] <= A[i - 1]) {
          result = result + A[i - 1] - A[i] + 1;
          A[i] = A[i-1] + 1;
      } else {
          i ++;
      }
  }
  return result;

};

// 876. 链表的中间结点
// 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。

// 直接循环，我用了一个数组存储链表节点，这样取的时候就不用再去循环了
// 还有种解法是快慢指针，效率应该比我的方法要高

 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let res;
  let cur = head;
  let tempArr = [];
  while(cur && cur.val){
      let node = new ListNode(cur.val);
      node.next = cur.next;
      cur = cur.next;
      tempArr.push(node);
  }
  return tempArr[parseInt(tempArr.length / 2)];
};

// 面试题 17.16. 按摩师
// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let lastRes = 0; // 之前数组不加最后一个值取的的最大结果
  let res = 0; //之前数组取得的最后结果

  for(let i = 0; i < nums.length; i++) {
      // 比较之前数组中增加本次元素后可取得的最大结果
      let temp = Math.max(res,lastRes + nums[i]);
      // 更新添加后的数组不加最后一个值取的的最大结果
      lastRes = res;
      // 更新数组取得的最后结果
      res = temp;
  }
  return res;
};