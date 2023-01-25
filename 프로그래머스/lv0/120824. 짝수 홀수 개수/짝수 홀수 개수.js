function solution(num_list) {
    const evenNumbers = num_list.filter((num) => !(num % 2)).length;
    const LENGTH = num_list.length;
    
    return [evenNumbers, LENGTH - evenNumbers];
}