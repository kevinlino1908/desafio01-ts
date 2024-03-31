import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value : number): void => {
    if(this.status){
      this.balance += value

      console.log(`seu saldo atual é ${this.balance}`)
      return
    }
    throw new Error('Conta inválida')
    

  
  }
}
