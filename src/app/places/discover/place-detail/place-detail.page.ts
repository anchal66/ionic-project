import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navController: NavController,
    private modalController: ModalController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    //internally use router navigate but ith animation that going back
    // this.navController.navigateBack('/places/tabs/discover')
    // this.navController.pop() // this pops the current page

    this.actionSheetCtrl.create({
      header: 'Choose an action:',
      buttons: [
        {
          text: 'Select Date:',
          handler: ()=>{
            this.openBookingModal('select')
          }
        },
        {
          text: 'Random Date:',
          handler: ()=>{
            this.openBookingModal('random')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl=>{
      actionSheetEl.present();
    });

  }

  openBookingModal(mode: 'select' | 'random'){
    console.log(mode)
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
