function solution(n) {
    return Array.from({ length: n + 1 }, (_, i) => i).filter(num => (num % 2));
}