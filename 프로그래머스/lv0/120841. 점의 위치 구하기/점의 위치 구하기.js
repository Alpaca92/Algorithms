function solution(dot) {
    const [x, y] = dot;
    const quadrant = [[1, 4], [2, 3]];
    
    return quadrant[x > 0 ? 0 : 1][y > 0 ? 0 : 1];
}