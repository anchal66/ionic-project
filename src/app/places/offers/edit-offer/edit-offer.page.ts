import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;
  form:FormGroup
  constructor(private route: ActivatedRoute,
    private placeService: PlacesService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      if(!param.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return
      }
      this.place = this.placeService.getPlace(param.get('placeId'));

      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        }),
      })
    })
  }
  onUpdateOffer(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form)
  }

}
