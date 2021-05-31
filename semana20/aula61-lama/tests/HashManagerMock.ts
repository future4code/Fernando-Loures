export class HashManagerMock {

    public async hash(text: string): Promise<string> {
        return "hashPassword";
    }

    public async compare(text: string, hash: string): Promise<boolean>{
        return text === hash
    }

}
export default new HashManagerMock()
