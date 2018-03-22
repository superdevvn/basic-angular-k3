import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { BookingService } from './booking.service';
import { CustomerService } from '../customer/customer.service';
import { UserService } from '../user/user.service';
import { SachService } from '../sach/sach.service';

@Component({
  selector: 'booking-detail-return',
  templateUrl: './booking-detail-return.component.html',


})
export class BookingDetailReturn implements OnInit {

  routerSubscription: any;
  inOut: any = {};
  id: number;
  title: String = '';
  customers: any ={};
  users: any={};
  books: any={};
  constructor(private bookingService: BookingService, private route: ActivatedRoute, private router: Router,
    private notification: NotificationService, private apiService: ApiService,
    private customerService: CustomerService,private bookService : SachService,
  private userService: UserService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.customerService.getCustomers().then((customer: any)=>{
        this.customers = customer
        console.log(this.customers)
        if(this.id==0)
        {
          this.inOut.CustomerId = customer[0].Id;
        }
      })
      this.userService.getUsers().then((user: any)=>{
        this.users = user
        console.log(this.users)
        if(this.id==0)
        {
          this.inOut.UserId = user[0].Id;
        }
      })
      this.bookService.getBooks().then((book: any)=>{
        this.books = book
        console.log(this.books)
        if(this.id==0)
        {
          this.inOut.BookId = book[0].Id;
        }
      })
      this.id = +params['id']; //convert string 'id' to a number
      if (this.id > 0) {
        this.title = "You are returning a book"
        this.bookingService.getInOut(this.id).then(res => {
          this.inOut = res;
          console.log(this.inOut);
        });
      } else {
        this.title = "You are creating a new transaction";
        this.inOut.FromDate = new Date();
      }
    })

  }

  save() {
    this.bookingService.saveInOut(this.inOut).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/booking-detail", res.Id]);
      this.notification.success('Saved');
    })
  }

  return() {
    this.inOut.ToDate = new Date();
    this.bookingService.saveInOut(this.inOut).then((res: any) => {
      if (this.id === 0) this.router.navigate(["/main/booking-detail", res.Id]);
      this.notification.success('Updated');
      this.router.navigate(["/main/booking-list"]);
    })
  }

  back(){
    this.router.navigate(["/main/booking-list"]);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }



}