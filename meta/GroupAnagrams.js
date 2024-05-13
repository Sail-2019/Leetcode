/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length == 0) return [];
    // time complexity of NK
    let ans = new Map();
    for(let str of strs){
        let count =  new Array(26).fill(0);
        for(let s of str){
            count[s.charCodeAt(0)-"a".charCodeAt(0)]++;
        }
        let key = "";
        for(let i=0; i<26;i++){
            key +='#';
            key += count[i];
        }
        if(!ans.has(key))ans.set(key, []);
        ans.get(key).push(str);

    }
    return Array.from(ans.values());


    //other soultion with NKLogK time complexity
    let result = [];
    
    let map = new Map();
    for(let i=0; i<strs.length;i++){
        let str = strs[i].split('').sort().join('');
        if(!map.has(str))
        {
            map.set(str,[]);
        }
        map.get(str).push(strs[i]);
    }
    for(let m of map.values()){
        result.push(m);
    }
    return result;
};