import { Component, Input } from '@angular/core';
import { Cv } from '../../models/models';
import { CostumDirDirective } from '../directive/custom-dir.directive';
import { ShortPipe } from '../../pipe/short.pipe';

@Component({
  selector: 'app-item-component',
  imports: [CostumDirDirective, ShortPipe],
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.css'
})
export class ItemComponentComponent {

  @Input() cv!: Cv

}
