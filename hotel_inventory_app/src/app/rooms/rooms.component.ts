import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './room';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms: boolean = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: RoomList[] = [];
  title = 'room list';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  //roomService = new RoomsService();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = ' New Hotel Name';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenity: 'Ac, free wifi , tv , bathroom',
      price: 500,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2019%2F03%2F20%2Ftravel%2Fshop-hotel-rooms-boutiques-retail.html&psig=AOvVaw3buJ-84TWAHhlYuODHhb0G&ust=1681731559259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCx7riorv4CFQAAAAAdAAAAABAE',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.3,
    };
    //this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];
  }
}
