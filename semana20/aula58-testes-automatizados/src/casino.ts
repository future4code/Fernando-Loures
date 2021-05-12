export enum Local {
    Brasil = "Brazil",
    EUA = "EUA"
}
export enum Nacionality {
    Brazilian = "Brazilian",
    American = "American"
}
export interface Client {
    name: string,
    nacionality: Nacionality,
    age: number
}
export interface Casino {
    local: Local,
    name: string
}
export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}
export function verifyAge(casino: Casino, users: Client[]): Result {
    const minAge: number = casino.local == Local.EUA ? 21 : 18
    let resultBrazilian: ResultItem = { allowed: [], unallowed: [] }
    let resultAmerican: ResultItem = { allowed: [], unallowed: [] }

    for (const client of users) {
        if (casino.local == Local.EUA) {
            if (client.nacionality == Nacionality.American) {
                if (client.age >= 21) {
                    resultAmerican.allowed.push(client.name)
                } else {
                    resultAmerican.unallowed.push(client.name)
                }
            } else {
                if (client.age >= 21) {
                    resultBrazilian.allowed.push(client.name)
                } else {
                    resultBrazilian.unallowed.push(client.name)
                }
            }
        } else {
            if (client.nacionality == Nacionality.American) {
                if (client.age >= 18) {
                    resultAmerican.allowed.push(client.name)
                } else {
                    resultAmerican.unallowed.push(client.name)
                }
            } else {
                if (client.age >= 18) {
                    resultBrazilian.allowed.push(client.name)
                } else {
                    resultBrazilian.unallowed.push(client.name)
                }
            }
        }
    }
    return { brazilians: resultBrazilian, americans: resultAmerican }
}