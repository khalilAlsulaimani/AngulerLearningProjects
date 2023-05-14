import { Component } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenity: 'AC, Free Wifi,tv,bathrom,kitchen',
      price: 500,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F20%2Ftravel%2Fshop-hotel-rooms-boutiques-retail.html&psig=AOvVaw3buJ-84TWAHhlYuODHhb0G&ust=1681731559259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCx7riorv4CFQAAAAAdAAAAABAE',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('21-Nov-2021'),
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
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}