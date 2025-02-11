import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { Account } from './models/Account';

@Component({
  selector: 'app-root',
  imports: [AccountListComponent, AccountInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
addAccount(account: Account) {
  this.accountList.push(account)
}

  title = 'TP1';
  accountList : Account[] = [
    new Account("Nadim","Active"),
    new Account("Malek","Inactive"),
    new Account("Abdderahim","Hidden"),
  ]
}
