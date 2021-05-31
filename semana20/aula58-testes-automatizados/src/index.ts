export interface User{
    name: string,
    balance: number
}
export const performPurchase = (user: User, totalPurchase: number): User | undefined =>{
    if(user.balance >= totalPurchase) return {...user, balance: user.balance - totalPurchase}
    else return undefined
}