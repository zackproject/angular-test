//Pre llamada a la api en archvio housing.service.ts
import { Component, inject,Inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';
import { environment } from './environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  //url de environtments
  readonly baseUrl = environment.apiUrl;

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }

  //La array se llenara a partir de 'getAllHousingLocations' del housing.service.ts
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = Inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
