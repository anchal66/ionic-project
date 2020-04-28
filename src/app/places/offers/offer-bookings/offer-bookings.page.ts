import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  private placeSub:Subscription

  constructor(private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (!param.has('placeId')) {
        this.navController.navigateBack('/places/tabs/offers');
        return
      }
      this.placeSub = this.placesService.getPlace(param.get('placeId')).subscribe(place=>{
        this.place = place
      });
    });
  }
  ngOnDestroy(){
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }

}
