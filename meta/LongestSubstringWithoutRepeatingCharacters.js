/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l = s.length;
    let ans = 0,last = 0;
    
    for(let i=0;i<l; i++){
        let ch = s[i];
        if(map.has(ch)){
           last = Math.max(map.get(ch),last)
        }
        ans = Math.max(ans,i-last+1)
        map.set(ch,i+1);
    }
    
    return ans;
};