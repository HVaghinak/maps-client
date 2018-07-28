import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../locations.service';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 8;
  locations;
  constructor(private locationService: LocationsService) {
  }

  ngOnInit() {
    this.locationService.getLocations()
      .subscribe((data: Response) => {
        this.locations = data;
      });
  }

  mapClicked($event: MouseEvent) {
    console.log($event.coords.lat);
    const location = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
    };
    this.locationService.setLocation(location)
      .subscribe((response: Response) => {
        this.locations.push(response);
    },
      (error) => alert(error.error.non_field_errors)
    );
    console.log(this.locations);
  }

  resetAddresses() {
    const reset = confirm('Are you sure ?');
    if (reset) {
      this.locationService.resetLocations(reset)
        .subscribe((response: Response) => {
          alert(response);
          this.locations = [];
        });
    }
  }
  showOnMap(location) {
    this.lat = location.latitude;
    this.lng = location.longitude;
    this.zoom = 18;
  }

  toStr(value) {
    return value.toString();
  }

}
