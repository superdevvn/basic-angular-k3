import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhongService } from '../phong/phong.service';
import { RoomDetailService } from './room-detail.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  routerSubscription: any;
  id: number;
  room: any = {};
  title: string = '';
  listSize: any[] = [
    {
      value: 'One',
      text: 'Phòng đơn'
    },
    {
      value: 'Two',
      text: 'Phòng đôi'
    },
    {
      value: 'Three',
      text: 'Phòng ba người'
    },
    {
      value: 'Four',
      text: 'Phòng bốn người'
    },
    {
      value: 'Five',
      text: 'Phòng năm người'
    }
  ];
  listTypes: string[] = ['VIP', 'Standard', 'Suite', 'Superior', 'Deluxe'];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private roomdetailService: RoomDetailService,
    private roomlistService: PhongService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG CHỈNH SỬA THÔNG TIN MỘT PHÒNG";
        this.roomdetailService.getRoom(this.id).then(res => {
          this.room = res;
        });
      } else {
        this.room = {
          Size: 'One',
          Type: 'Standard'
        };
        this.title = "BẠN ĐANG THÊM MỚI THÔNG TIN MỘT PHÒNG";
      }
    });
  }

  back() {
    this.router.navigate(["/main/room-list"]);
  }
  saveRoom() {
    this.roomdetailService.saveRoom(this.room).then((res: any) => {
      if (this.id == 0) this.router.navigate(["/main/room-detail", res.Id]);
    })
  }

}
