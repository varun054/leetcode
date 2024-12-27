var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len-1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0;
            if(i === 0){
                digits.unshift(1);
                return digits;
            }
        } else {
            digits[i] = digits[i] + 1;
            return digits;
        }
    }
};
console.log(plusOne ([9, 8, 9]));