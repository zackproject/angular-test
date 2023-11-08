import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone:true,
  template: `
    <div id="location-component">
      <img width="400" height="276" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ee/latest/20080817174424/Mapa_de_Sinnoh.png/400px-Mapa_de_Sinnoh.png" alt="Sinnoh map">
    <p>This is a map of the better place where we can live</p>
    </div>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}
