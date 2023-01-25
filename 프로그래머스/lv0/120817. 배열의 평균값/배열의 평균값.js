function solution(numbers) {
    const sum = numbers.reduce((prev, cur) => prev + cur, 0);
    const avg = sum / numbers.length;
    return avg.toFixed(1);
}