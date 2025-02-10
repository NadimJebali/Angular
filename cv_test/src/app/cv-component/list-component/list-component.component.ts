import { Component, EventEmitter, Output } from '@angular/core';
import { ItemComponentComponent } from '../item-component/item-component.component';
import { CV_LIST } from '../../constants/constants';
import { Cv } from '../../models/models';

@Component({
  selector: 'app-list-component',
  imports: [ItemComponentComponent],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {

  @Output() changedSelectedCv = new EventEmitter<Cv>();
  cvList = CV_LIST;

  selectCv(item:Cv){
    this.changedSelectedCv.emit(item);
  }

  


}
