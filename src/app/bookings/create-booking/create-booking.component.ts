import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace;

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  onBook(){
    this.modalController.dismiss({message:'hello'}, 'confirm')
  }

  onCancel(){
    this.modalController.dismiss(null, 'cancel');
  }

}
