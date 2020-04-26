import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  loadedPlacesSliced: Place[];

  constructor(private placesServices: PlacesService, private menuContrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesServices.places;
    this.loadedPlacesSliced = this.placesServices.places.slice(1);
  }

  onOpenMenu(){
    this.menuContrl.toggle('menu1')
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail)
  }

}
