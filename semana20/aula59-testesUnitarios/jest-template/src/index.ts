export interface Character{
    name: string,
    life: number,
    defense: number,
    strength: number
}

export const validateCharacter =(input: Character): boolean=>{
    if(!input.name || !input.life || !input.defense || !input.strength || input.life < 0 || input.defense < 0 || input.strength <0 )
        return false
    return true
}

export const performAttack = (attacker: Character, defender: Character, callBack:Function): Error | void =>{
    if(!callBack(attacker) || !callBack(defender))
        throw new Error("Invalid Character");
    if(attacker.strength > defender.defense) 
        defender.life = attacker.strength - defender.defense
}
