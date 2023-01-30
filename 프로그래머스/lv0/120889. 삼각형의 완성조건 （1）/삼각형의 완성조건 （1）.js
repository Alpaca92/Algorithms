function solution(sides) {
    const max = Math.max(...sides);
    const sum = sides.reduce((prev, acc) => (prev + acc), 0);
    return (max * 2) < sum ? 1 : 2;
}