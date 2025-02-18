import { Component, EventEmitter, Output } from '@angular/core';
import { ItemComponentComponent } from '../item-component/item-component.component';
import { CV_LIST } from '../../constants/constants';
import { Cv } from '../../models/models';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-list-component',
  imports: [ItemComponentComponent,FilterPipe],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {
  searchterm: string =''

  @Output() changedSelectedCv = new EventEmitter<Cv>();
  cvList = CV_LIST;

  selectCv(item:Cv){
    this.changedSelectedCv.emit(item);
  }

  


}
