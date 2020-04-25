import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navController: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    //internally use router navigate but ith animation that going back
    // this.navController.navigateBack('/places/tabs/discover')
    // this.navController.pop() // this pops the current page
    this.modalController.create({
      component: CreateBookingComponent,
       componentProps:{selectedPlace: 'test'
    }}).then(modal=>{
      modal.present();
      return modal.onDidDismiss();
    })
    .then(resultDta=>{
      console.log(resultDta.data, resultDta.role);
      if(resultDta.role === 'confirm'){
        console.log('booked')
      }
    });
  }

}
