import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1',
     'Avinash Anchal',
      'in hearts',
       'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
       90,
       new Date('2019-01-01'),
       new Date('2019-12-31') ),
       new Place('p2',
     'Avijeet Anchal',
      'in hearts',
       'https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/cover-for-Places-To-Visit-In-August-In-The-World.jpg',
       80,
       new Date('2019-01-01'),
       new Date('2019-12-31') ),
       new Place('p3',
     'Shrija Shree',
      'in hearts',
       'https://www.usnews.com/dims4/USNEWS/399cc03/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F17%2F5c%2Fe08bd2a347be848e3dd4e98d88d9%2F2-30.%20San%20Francisco-Getty.jpg',
       70,
       new Date('2019-01-01'),
       new Date('2019-12-31')),
  ];

  constructor() { }

  get places(){
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(p=>p.id === id)}
  }
}
