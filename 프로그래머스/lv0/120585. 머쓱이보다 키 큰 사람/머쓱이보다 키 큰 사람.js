function solution(array, height) {
    return array.filter((elem) => elem > height).length;
}