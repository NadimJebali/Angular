import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../models/Account';

@Component({
  selector: 'app-account-info',
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent {

  @Output() addAccount = new EventEmitter<Account>();
 
  account! : Account;

  getinfo(AccountName : string,AccountType : string){
    this.account = new Account(AccountName, AccountType);
    this.addAccount.emit(this.account);
    console.log(this.account.name,this.account.type);
  }


}
