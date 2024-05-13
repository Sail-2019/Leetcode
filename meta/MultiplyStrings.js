/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

    Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let a = num1.length-1, b = num2.length-1, result=[a+b+2], pad = 1;
    if(num1 == 0 || num2 == 0)return '0';
    
    result.fill(0);
    
    for(let i=a;  i>=0; i--){
        let temp = [];
        let cotemp = 0,co=0;
        
        for(let j=b; j >=0; j--){
            let ans = num1[i] * num2[j] + cotemp;
            cotemp = Math.floor(ans/10);
            temp.push(ans%10);
            
        }
        if(cotemp > 0)
            temp.push(cotemp);

        if(result.length == 0){
            result = [...temp];
        } else{
            let l = 0;
            for(let k=pad; k<result.length && l<temp.length;k++,l++){
                let sum = result[k]+ temp[l]+co;
                result[k] = sum%10;
                co = Math.floor(sum/10);
    
            }
            while(l < temp.length){
                let sum = co+temp[l++]
                result.push(sum%10);
                co = Math.floor(sum/10);
            }
            if(co > 0)
                result.push(co);
            pad++;
        }
    }


    if(result[0] == '0'){
        result.reverse().pop();
        return result.join('');
    }      
    else return result.reverse().join('')
};