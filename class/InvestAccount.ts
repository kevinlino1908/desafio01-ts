import { DioAccount } from "./DioAccount"

export class InvestAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  invest = (value : number): void => {
    if(this.status){
      this.balance += value + 10

      console.log(`seu saldo atual é ${this.balance}`)
      return
    }
    throw new Error('Conta inválida')
    

  
  }
}
