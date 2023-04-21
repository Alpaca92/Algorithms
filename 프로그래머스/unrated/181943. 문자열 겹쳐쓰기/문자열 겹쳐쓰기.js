function solution(my_string, overwrite_string, s) {
//   var answer = "";
  const length = overwrite_string.length + s;
//   const str = my_string.substring(s, length);
//   answer = my_string.replace(str, overwrite_string);
    
//   return answer;
     return my_string.slice(0, s) + overwrite_string + my_string.slice(length);
}