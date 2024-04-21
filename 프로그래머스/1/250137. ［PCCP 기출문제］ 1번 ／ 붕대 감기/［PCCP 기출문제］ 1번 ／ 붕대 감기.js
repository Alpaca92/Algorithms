function solution(bandage, health, attacks) {
    let currentHP = health;
    
    for (let i = 0; i < attacks.length; ++i) {
        const currentAttack = attacks[i];
        const nextAttack = attacks[i + 1];
        
        currentHP -= currentAttack[1];

        if (currentHP <= 0) break; // 공격에 사망한 경우
        if (!nextAttack) break; // 다음 공격이 없는 경우
        
        const nextAttackTimeInterval = nextAttack[0] - currentAttack[0] - 1;
        const amountOfRecovery = (bandage[1] * nextAttackTimeInterval) + Math.floor(nextAttackTimeInterval / bandage[0]) * bandage[2];
        currentHP = Math.min(health, (currentHP + amountOfRecovery));
    }
    
    return currentHP > 0 ? currentHP : -1;
}