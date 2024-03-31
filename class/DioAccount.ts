export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value

      console.log(`seu saldo atual é ${this.balance}`)
      return
    }
    throw new Error('Conta inválida')
  }

  withdraw = (value : number): void => {
    if(this.validateStatus()){
      if(value < this.balance){
        this.balance -= value

        console.log(`você sacou ${value} e seu saldo atual é de ${this.balance}`)

        return
      }
      console.log("saldo insuficiente!")
      return
    }
    throw new Error('Conta inválida')

    
  }

  getBalance = (): number => {
   return this.balance
  }

  validateStatus = (): boolean => {
    return this.status   
  }
}
