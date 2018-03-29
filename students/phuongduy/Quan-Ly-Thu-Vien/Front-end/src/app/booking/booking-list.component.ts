import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { BookingService } from './booking.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html'
})
export class BookingListComponent implements OnInit {
inOuts: any={};
id: number;
  constructor(private bookingService: BookingService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService,
private notification: NotificationService) { }

  ngOnInit() {
    this.bookingService.getInOuts().then((inOut:any[])=>{
    this.inOuts = inOut;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(inOut){

      this.router.navigate(["/main/booking-detail",inOut.Id]);
    }

    create(){
      this.router.navigate(["/main/booking-detail",0]);
    }

    delete(inOut) {
      this.bookingService.deleteRole(inOut.Id).then(() => {
        this.bookingService.getInOuts().then((inOut: any[]) => {
          this.inOuts = inOut;
        });
      });
      this.Notification.success('Deleted');
    }

    redirect(inOut){

      this.router.navigate(["/main/booking-detail-return",inOut.Id]);
    }
    
    
}
