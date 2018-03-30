import { Component, OnInit } from '@angular/core';
import { SachService } from './sach.service';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'sach-list',
  templateUrl: './sach-list.component.html'
})
export class SachListComponent implements OnInit {
books: any[];
  constructor(private sachService: SachService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.sachService.getBooks().then((book:any[])=>{
    this.books = book;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(book){
      alert(book.Name);
      this.router.navigate(["/main/sach-detail",book.Id]);
    }

    create(){
      this.router.navigate(["/main/sach-detail",0]);
    }

    delete(book) {
      this.sachService.deleteRole(book.Id).then(() => {
        this.sachService.getBooks().then((books: any[]) => {
          this.books = book;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
