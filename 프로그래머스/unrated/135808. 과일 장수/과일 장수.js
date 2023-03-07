function solution(k, m, score) {
    let result = 0;
    score.sort((a, b) => b - a);
    
    for(let i = 1; (i * m) - 1 < score.length; ++i) {
        const index = (i * m) - 1;
        result += score[index] * m ?? 0;
    }
    
    return result;
}
