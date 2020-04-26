import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn:'root' })
export class BookingService{

    private _bookings: Booking[]= [
        {
            id: 'xyz',
            plceId: 'p1',
            userId: 'abc',
            placeTitle: 'Anchalz',
            guestNumber: 2
        },
        {
            id: 'abc',
            plceId: 'p2',
            userId: 'xyz',
            placeTitle: 'Anchalzz',
            guestNumber: 3
        }
    ];

    constructor(){}

    get bookings(){
        return [...this._bookings];
    }
}