function solution(food) {
    const LAST_INDEX = food.length - 1;
    let result = "0";
    
    for (let i = LAST_INDEX; i >= 1; --i) {
        const half = Math.floor(food[i] / 2);
        
        if (half !== 0) {
            const repeat = `${i}`.repeat(half);
            result = repeat + result + repeat;
        }
    }
    
    return result;
}