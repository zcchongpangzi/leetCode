// // 单向链表定义
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)

// }
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
//  }
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// function foo(node: ListNode) {
//     let res = null;
//     let currentNode = node;
//     while( currentNode != null ) {
//         if (currentNode.next == null) {
//             currentNode.next = res;
//             res = currentNode;
//             break;
//         }
//         let nextNode = currentNode.next;
//         currentNode.next = res;
//         res = currentNode;
//         currentNode = nextNode;
//     }
//     return res;
// }

// function foo(head: ListNode) {
//     let res;
//     let exitsArr = [];
//     let current = head;
//     while(true) {
        
//         if (current == null) {
//             res = false;
//             break;
//         }

//         if(exitsArr.indexOf(current) != -1) {
//             res = true;
//             break;
//         }
//         exitsArr.push(head);

//         current = current.next
//     }

//     return res;
// }

// function foo(node1:ListNode, node2:ListNode) {

//     let l1 = node1;
//     let l2 = node2;
//     let res = new Node(11);
//     let last = res;

//     while(true) {

//         if (l1 == null|| l2 == null) {
//             break;
//         }

//         if(l1.val >= l2.val) {
//             last.next = l1;
//             l1 = l1.next;
//         } else {
//             last.next = l2;
//             l2 = l2.next;
//         }
//         last = last.next;
//     }

//     if(l1 == null) {
//         last.next = l2;
//     }
//     if (l2 == null) {
//         last.next = l1;
//     }

//     return res.next;

// }

// function foo(head, n) {
//     let node = head;
//      let i = 0;
//      let res = head;;
//      while(true) {
//          if(node != null) {
//              node = node.next;
//              i ++;
//          } else {
//              break;
//          }
//      }
//      let target = i - n + 1;
 
//      if (target == 1) {
//          res = head.next;
//      } else {
//          let j = 1;
//          let node2 = head;
//          while(true) {
//              if(j != target - 1) {
//                  node2 = node2.next;
//                  j ++;
//              } else {
//                  break;
//              }
//          }
//          node2.next = node2.next.next;
//      }
//      return res;
//  };
// function foo(head:Node) {
//     let fast = head;
//     let slow = head;
//     let res;

//     while(true) {

//         if (fast.next == null || fast.next.next == null) {
//             break;
//         }

//         fast = fast.next.next;
//         slow = slow.next;
//     }

//     if (fast.next == null) {
//         res = slow;
//     } else {
//         res = slow.next;
//     }

//     return res;
// }

// function foo(nums: Array) {

//     // [2, 3, 1, 0, 2, 5, 3]

//     let res;
//     let i = 0;
//     while(true) {
//         if (i = nums.length) {
//             break;
//         }

//         if (nums[i] != i) {
//             if (nums[nums[i]] == nums[i]) {
//                 res = nums[i];
//             } else {
//                 let num = nums[i];
//                 nums[i] = nums[nums[i]];
//                 nums[num] = num;
//             }
//         } else {
//             i ++;
//         }


//     }
    
//     return res;
// }


// var findNumberIn2DArray = function(matrix, target) {
//     let res = false;
//     for (let i = 0; i < matrix.length; i++) {
//         if (searchNum(matrix[i], target)) {
//             res = true;
//             break;
//         }
//     }

//     function searchNum(nums,target2) {
//         let start = 0;
//         let end = nums.length;
//         while (start < end) {

//             let pos = start +  ((end - start) >> 1);
//             if (nums[pos] === target2) {
//                 return true;
//             }
//             if (nums[pos] > target2) {
//                 end = pos;
//             }
//             if (nums[pos] < target2) {
//                 start = pos + 1;
//             }
//         }
//         return false;
//     }

//     return res;
// };


// function bs(arr, t) {
//     let i = 0
//     let j = arr.length
//     while(i < j) {
//       let m = i + ((j - i) >> 1)
//       if(arr[m] === t) {
//         return true
//       } else if (arr[m] > t){
//         j = m
//       } else {
//         i = m + 1
//       }
//     }
//     return false
//   }


// class NodeList {
//     constructor(key) {
//         this.key = key;
//         this.next = null;
//     }

// }
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.count = 0;
//     this.guard = new NodeList(-1);
//     this.store = new Map();
//     this.deleteNode = function(key) {
//         let current = this.guard;
//         while(current!= null) {
//             if (current.key == key) {
//                 break;
//             }
//             current = current.next;
//         }
//     }

// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.store.has(key)) {
//         let res = this.store.get(key);


//         return res;
//     } else {
//         return -1;
//     }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {

// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// // 输入：nums = [4,5,6,7,0,1,2], target = 3
// // 输出：-1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var oddEvenList = function(head) {
//     let startUneven = head;
//     let endUneven = head;
//     let startEven = head.next;
//     let endEven = startEven;
//     if (startEven == null) {
//         return head;
//     }
//     while (endEven.next != null) {
//         let list = endEven.next;
//         endEven.next = endEven.next.next;
//         list.next = startEven;
//         endUneven.next = list;
//         endUneven = endUneven.next;
//         endEven = endEven.next;
//     }
//     return head;

// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//  function isOK(row,column,results,limit) {
//     let leftUp = column - 1;
//     let rightUp = column + 1;

//     for (let i = row - 1; i >= 0; i--) {
//         if (results[i] == column) {
//             return false;
//         }
//         if (leftUp >= 0) {
//             if ( results[i] == leftUp) {
//                 return false;
//             }
//         }
//         if (rightUp < limit) {
//             if (results[i] == rightUp) {
//                 return false;
//             }
//         }
//         leftUp --;
//         rightUp ++;
//     }

// }

// function printNQueens(results,resAll) {
//     let res = [];
//     for (let i  = 0; i < results.length; i++) {
//         let resRow = "";
//         for (let j = 0; j < results.length; j ++) {
//             if (results[i] == j) {
//                 resRow += "Q";
//             } else {
//                 resRow += ".";
//             }
//         }
//         res.push(resRow);
//     }
//     resAll.push(res);
// }

// function calQueen(n,max,results,resAll) {
//     if (n == max) {
//         printNQueens(results,resAll);
//     }
//     for (let i = 0; i < max; i ++) {
//         if (isOK(n,i,results,max)) {
//             results[n] = i;
//             calQueen(n + 1,max,results);
//         }
//     }
// }

// var solveNQueens = function(n) {
//     let res = [];
//     for (let i = 0; i < n; i ++) {
//         let results = [];
//         results[0] = n;
//         calQueen(i,n,res);  
//     }
// };

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// let arr = [3,9,20,null,null,15,7];
// let root = new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7)));




// function foo(root) {
//     function ListNode(value,next) {
//         this.value = (value === undefined ? -1 : value);
//         this.next = (next === undefined ? null : next);
//     }

//     function addNode(value,node) {
//         let newNode;
//         // 添加空
//         if (value == null) {
//             newNode = new ListNode(null);
//         } else {
//             newNode = new ListNode(value);
//         }

//         node.next = newNode;         
//     }

//     let queue = new ListNode(root);
//     let current = queue;
//     let queueEnd = current;
//     addNode(-1,queue);
//     queueEnd = queueEnd.next;
//     let res = [];
//     let level = [];
//     while (current != null) {

//         if (current.value == -1) {
//             if (level.length != 0) {
//                 res.push(level);
//             }
//             if (current == queueEnd) {
//                 break;
//             }
//             level = [];
//             addNode(-1,queueEnd);
//             queueEnd = queueEnd.next;
//         } else {
//             if (current.value != null) {
//                 level.push(current.value.val);
//                 addNode(current.value.left,queueEnd);
//                 queueEnd = queueEnd.next;
//                 addNode(current.value.right,queueEnd);
//                 queueEnd = queueEnd.next;
//             }
//         }

//         current = current.next;
//     }
//     return res;
// }

// let arr2 = foo(root);

function foo(n) {
    
}
