import { Component, inject } from '@angular/core';
// configure detail
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //activate router :id
  route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    constructor() {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
    }
}
