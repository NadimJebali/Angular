import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountItemComponent } from '../account-item/account-item.component';
import { Account } from '../models/Account';

@Component({
  selector: 'app-account-list',
  imports: [AccountItemComponent],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
@Input() allAccountList : Account[]=[];
@Output() eventToApp = new EventEmitter()

 emitToApp(account: any){
  this.eventToApp.emit(account)
 }
}
