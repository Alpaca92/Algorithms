function solution(today, terms, privacies) {
    const result = [];
    const termTable = terms.reduce((table, cur) => {
        const [type, expirationPeriod]  = cur.split(' ');
        
        return {...table, [type]: expirationPeriod};
    }, {});
    
    privacies.forEach((privacy, i) => {
        const [privacyDate, type] = privacy.split(' ');
        const [expirationYear, expirationMonth, expirationDay] = today.split('.');
        const [privacyYear, privacyMonth, privacyDay] = privacyDate.split('.');
        const duration = (+expirationYear - privacyYear) * 12 + (+expirationMonth - privacyMonth) + ((+expirationDay - privacyDay) / 28);
                
        if (duration >= termTable[type]) result.push(i + 1);
    });
    
    return result;
}