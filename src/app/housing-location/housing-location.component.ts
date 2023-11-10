import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // ! = le aseguramos que le pasaremos un housingLocation
  // llamado en home-component.ts y usado en home-component.html
  @Input() housingLocation!: HousingLocation;

}
