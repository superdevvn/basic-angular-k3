import { Component, OnInit } from '@angular/core';
import { PhongService } from './phong.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phong',
  templateUrl: './phong.component.html',
  styleUrls: ['./phong.component.css']
})
export class PhongComponent implements OnInit {
  rooms: any[];
  constructor(private phongService: PhongService, private router: Router) { }

  ngOnInit() {
    this.phongService.getRooms().then((rooms: any[]) => {
      this.rooms = rooms;
    });
  }
  detail(room) {
    this.router.navigate(["/main/room-detail", room.Id]);
  }
  create() {
    this.router.navigate(["/main/room-detail", 0]);
  }
  

}
