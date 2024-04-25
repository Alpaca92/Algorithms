function solution(babbling) {
    const KEY = '_';
    const targets = ['aya', 'ye', 'woo', 'ma'];
    return babbling.reduce((acc, cur) => {
        let copied = cur;
        
        for (const target of targets) {
            const regex = new RegExp(`(?<!(${target}))${target}(?!(${target}))`, 'g');
            copied = copied.replace(regex, KEY);
        }
        
        const testRegex = new RegExp(`^${KEY}+$`);
        
        return testRegex.test(copied) ? ++acc : acc;
    }, 0);
}