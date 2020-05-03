let words = ["cat","bt","hat","tree"], 
    chars = "atach";


    var countCharacters = function(words, chars) {
      // 用于保存长度之和
      let size = 0;
      // 字母Map，用于存放每个字母的出现频率
      let charMap = new Map();
 
      for(let char of chars) {
         // 遍历字母表，统计其中每个字母出现的频率
         charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
      }
 
      // 双重循环，外层循环遍历单词数组中的每个单词
      for(let word of words) {
          // 单词Map，用于存放单词中每个字母的出现频率
          let wordMap = new Map();
 
          // 内层循环
          for(let char of word) {
              // 统计字符串（单词）中每个字母出现的频率
              wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
          }
 
          // 是否满足拼写
          let enough = true;
 
          // 遍历待匹配单词的每个字母
          for(let char of word) {
              // 判断 字母表中的字母是否足够拼写单词 或者 字母表中是否有该字母
             if(wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
                 enough = false;
                 break;
             }
          }
          if(enough) {
              // 累加可拼写的单词长度
              size += word.length;
          }
      }
 
      // 返回单词长度
      return  size;
 };
console.log(countCharacters(words,chars));