import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../models/Account';

@Component({
  selector: 'app-account-item',
  imports: [],
  templateUrl: './account-item.component.html',
  styleUrl: './account-item.component.css'
})
export class AccountItemComponent {

  @Input() oneAccount! : Account;

   setType(type: string) {
    this.oneAccount.type=type;
    }
}
