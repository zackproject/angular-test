import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <p>
      Texto del home component
      <app-housing-location></app-housing-location>
    </p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
