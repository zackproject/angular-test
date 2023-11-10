import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housingLocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // ! = le aseguramos que le pasaremos un housingLocation
  // llamado en home-component.ts y usado en home-component.html
  @Input() housingLocation!: HousingLocation;

}
