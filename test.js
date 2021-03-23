var maxSlidingWindow = function(nums, k) {

    if(nums.length == 0) {
        return [];
    }
    if(k == 0) {
        return [];
    }
    let res = [];
    let queue = [];
    let indexQueue = [];
    let bigNum;
    for (let i = 0; i < nums.length; i++) {

        if(i == 0) {
           bigNum = nums[0]; 
        }

        if(indexQueue[0] + k == i) {
            queue.shift();
            indexQueue.shift();
            bigNum = queue[0];
        }

        if(nums[i] > bigNum) {
            bigNum = nums[i];
            bigIndex = i;
            queue[0] = bigNum;
            indexQueue[0] = i;
        } else {
            queue.push(nums[i]);
            indexQueue.push(i);
        }

        let newIndexqueue = [];
        queue = queue.map((item,index)=>{
            if(item >= nums[i]) {
                newIndexqueue.push(indexQueue[index]);
                return item;
            }
        });
        indexQueue = newIndexqueue;

        if (i >= k - 1) {
            res.push(queue[0]);
        }
    }

    return res;

};
// maxSlidingWindow([1,3,1,2,0,5],3);

function Fib(n) {
    if(n == 0) {
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        return Fib(n - 1) + Fib(n - 2);
    }
}

console.log(Fib(1));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(5));
console.log(Fib(6));



[1,1,2,2,3,3,4];