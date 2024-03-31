import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { InvestAccount } from './class/InvestAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(50)
peopleAccount.deposit(20)
peopleAccount.withdraw(30)
peopleAccount.withdraw(60)




const companyAccount : CompanyAccount = new CompanyAccount("inter", 2)

companyAccount.getLoan(20)


const investAccount : InvestAccount = new InvestAccount ("nath", 300)

investAccount.invest(200)

