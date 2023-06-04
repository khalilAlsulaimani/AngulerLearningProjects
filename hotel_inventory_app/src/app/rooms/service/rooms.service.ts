import { Injectable } from '@angular/core';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenity: 'AC, Free Wifi,tv,bathrom,kitchen',
      price: 500,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F20%2Ftravel%2Fshop-hotel-rooms-boutiques-retail.html&psig=AOvVaw3buJ-84TWAHhlYuODHhb0G&ust=1681731559259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCx7riorv4CFQAAAAAdAAAAABAE',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('21-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Double Room',
      amenity: 'AC, Free Wifi,tv,bathrom,kitchen',
      price: 1000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F20%2Ftravel%2Fshop-hotel-rooms-boutiques-retail.html&psig=AOvVaw3buJ-84TWAHhlYuODHhb0G&ust=1681731559259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCx7riorv4CFQAAAAAdAAAAABAE',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 3.4,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suit Room',
      amenity: 'AC, Free Wifi,tv,bathrom,kitchen',
      price: 15000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F20%2Ftravel%2Fshop-hotel-rooms-boutiques-retail.html&psig=AOvVaw3buJ-84TWAHhlYuODHhb0G&ust=1681731559259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCx7riorv4CFQAAAAAdAAAAABAE',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 2.5,
    },
  ];

  constructor() {
    console.log('rooms servuce is created');
  }

  getRooms() {
    return this.roomsList;
  }
}
