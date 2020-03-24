/**
 * 29
 * 两数相除
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let newDividend;
    let newDivisor;

    if(dividend < 0) {
        newDividend = 0 - dividend;
    } else {
        newDividend = dividend;
    }

    if (divisor < 0) {
        newDivisor = 0 - divisor;
    } else  {
        newDivisor = divisor;
    }

    let count = 0;
    let left = newDividend;

    while (left > newDivisor) {
        count ++;
        left -= newDivisor;
    }


    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {

    } else {
        count = 0 - count;
    }

    if (count > Math.pow(2,31) - 1 || count < - Math.pow(2,31)) {


        return Math.pow(2,31) - 1;

    }
    return count;
};

// 30. 串联所有单词的子串
// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

/**
 * 30 活动窗口
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

    let wordLength = words[0].length;
    let totalWordLength = wordLength * words.length;

    let keyMap = {};
  let startArrs = words.map((val,index)=>{
        if(keyMap[val]){
            keyMap[val] ++;
        } else {
            keyMap[val] = 1;
        }
        return val[0];
    })



    let res = [];
    let i = 0;
    while(i < s.length - totalWordLength + 1) {
        let flag = false;

        let possition = startArrs.indexOf(s[i])
        // 当前字符串为单词开头
        if(possition != -1) {
            let newKeyMap = {};
            Object.keys(keyMap).map((val)=>{
                newKeyMap[val] = keyMap[val]
            })
            let tempStr = '';
            let count = 0;
            for(let j = i; j < totalWordLength + i; j++) {
                tempStr += s[j];
                count ++;
                // 一个单词长度
                if(count % wordLength == 0 && count != 0) {
                    if(words.indexOf(tempStr) != -1) {
                        newKeyMap[tempStr] --;
                        tempStr = '';
                        count = 0;
                    } else {
                        break;
                    }
                }
            }

            let wordFlag = true;
            Object.keys(newKeyMap).map((val)=>{
                if(newKeyMap[val] !== 0) {
                    wordFlag = false;
                }
            })
            flag = wordFlag;
        }
        if(flag){
            res.push(i)
            i += wordLength;
        } else {
            i ++;
        }

    }
    return res;
};
let s = "barfoothefoobarman";
let words = ["foo","bar"];

findSubstring(s,words)


