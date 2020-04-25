import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  constructor(private placesServices: PlacesService, private menuContrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesServices.getPlaces();
  }

  onOpenMenu(){
    this.menuContrl.toggle('menu1')
  }

}
