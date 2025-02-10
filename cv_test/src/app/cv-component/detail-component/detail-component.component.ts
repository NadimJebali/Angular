import { Component, Input } from '@angular/core';
import { Cv } from '../../models/models';

@Component({
  selector: 'app-detail-component',
  imports: [],
  templateUrl: './detail-component.component.html',
  styleUrl: './detail-component.component.css'
})
export class DetailComponentComponent {

  @Input() cv!: Cv


}
