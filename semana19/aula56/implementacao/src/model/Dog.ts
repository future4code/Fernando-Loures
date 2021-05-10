export class Dog {
    private name: string
    private weight: number
  
    constructor(name: string) {
       this.name = name
       this.weight = 10
    }
  
    public getName() {
       return this.name
    }
  
    public setName(newName: string) {
       this.name = newName
    }
  }