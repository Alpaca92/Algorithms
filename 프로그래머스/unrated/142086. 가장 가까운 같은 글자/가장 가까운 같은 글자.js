function solution(s) {
    return [...s].map((char, i, origin) => {
        if(i === 0) return -1;
        
        const charsBeforeCurrent = origin.slice(0, i);
        const lastIndex = charsBeforeCurrent.lastIndexOf(char);
        
        if (lastIndex === -1) return -1;
        
        return i - lastIndex;
    });
}