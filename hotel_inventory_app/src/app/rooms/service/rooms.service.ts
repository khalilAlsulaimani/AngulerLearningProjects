import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList: RoomList[] = [];

  constructor(private http: HttpClient) {
    console.log('rooms servuce is created');
  }

  getRooms() {
    return this.http.get<RoomList>('/api/rooms');
  }
}
