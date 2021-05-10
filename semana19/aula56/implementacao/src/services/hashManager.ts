import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv'

dotenv.config();

export const hash = async (plainText: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(plainText, salt)
}

export const compare = async (plainText: string, cypherText: string): Promise<boolean> => {
  return bcrypt.compare(plainText, cypherText)
}

export class HashManager {
  private cost: number = Number(process.env.BCRYPT_COST);
//o meu cost agora será passado por parâmetro
  constructor(cost?: number){
    
  }

  

  async hash(plainText: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.cost);
    return bcrypt.hash(plainText, salt)
  }

  async compare (plainText: string, cypherText: string): Promise<boolean> {
    return bcrypt.compare(plainText, cypherText)
  }

}