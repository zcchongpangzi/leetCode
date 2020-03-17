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


