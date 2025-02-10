import { Component, input } from '@angular/core';
import { ListComponentComponent } from './list-component/list-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { Cv } from '../models/models';
import { CV_LIST } from '../constants/constants';

@Component({
  selector: 'app-cv-component',
  imports: [DetailComponentComponent,ListComponentComponent],
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css'
})
export class CvComponentComponent {

  selectedCv:Cv=CV_LIST[0];

changeSelectedCv(cv: Cv) {
  this.selectedCv = cv;
}



}
