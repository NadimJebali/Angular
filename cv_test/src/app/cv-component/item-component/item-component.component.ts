import { Component, Input } from '@angular/core';
import { Cv } from '../../models/models';

@Component({
  selector: 'app-item-component',
  imports: [],
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.css'
})
export class ItemComponentComponent {

  @Input() cv!: Cv

}
