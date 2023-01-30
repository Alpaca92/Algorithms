function solution(t, p) {
    let result = 0;
    const T_LENGTH = t.length;
    const P_LENGTH = p.length;
    
    for (let i = 0; i <= T_LENGTH - P_LENGTH; ++i) {
        const num = +t.slice(i, i + P_LENGTH);
        if (num > +p) continue;
        ++result;
    }
    
    return result;
}