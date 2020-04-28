import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  loadedPlacesSliced: Place[];
  private placeSub: Subscription

  constructor(private placesServices: PlacesService, private menuContrl: MenuController) { }

  ngOnInit() {
    this.placeSub = this.placesServices.places.subscribe(places => {
      this.loadedPlaces = places
      // this.loadedPlacesSliced = this.placesServices.places.slice(1);
    });

  }
  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe()
    }
  }

  onOpenMenu() {
    this.menuContrl.toggle('menu1')
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail)
  }

}
