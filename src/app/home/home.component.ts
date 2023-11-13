//Pre llamada a la api en archvio housing.service.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { environment } from './environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  //url de environtments
  readonly baseUrl = "https://angular.io/assets/images/tutorials/faa/";

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
  housingService: HousingService = inject(HousingService);
  // filtro futuro de casas
  filteredLocationList: HousingLocation[] = [];

  // llamada asincrona a la api de casas
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      //guarda todas las casas
      this.housingLocationList = housingLocationList;
      // la lista para filtrar sera igual que las casas
      this.filteredLocationList = housingLocationList;
    });
  }

  // home.component.html, si el filtro de ciudad coincide
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
