/**
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

    The algorithm for myAtoi(string s) is as follows:

    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
    Return the integer as the final result.
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let limit = 2**31;
    let lower = -limit, upper = limit-1;
    let number = 0, i = 0, sign = 1;
    
    //check for space
    while(s[i] == ' '){
        i++;
    }
    //check for sign
    if(s[i] == '-'){
        sign = -1;
        i++;
    }
    else if(s[i] == '+'){
        i++;
    }
    //check for leading zeros
    while(i<s.length && s[i] == '0'){
        i++;
    }
        
    while(i<s.length){
        if(s[i] < '0' || s[i] > '9')
            break;
        number = 10*number + parseInt(s[i]);

        if(sign*number < lower) return lower;
        if(sign*number > upper)return upper;
        i++;
    }
    
    return sign*number;
};