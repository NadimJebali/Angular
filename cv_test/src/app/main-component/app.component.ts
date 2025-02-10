import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponentComponent } from '../cv-component/cv-component.component';

@Component({
  selector: 'app-root',
  imports: [CvComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv_test';
}
