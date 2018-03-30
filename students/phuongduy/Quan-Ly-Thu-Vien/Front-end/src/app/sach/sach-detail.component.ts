import { Component, OnInit } from '@angular/core';
import { SachService } from './sach.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { CategoryService } from '../category/cate.service';

@Component({
  selector: 'sach-detail',
  templateUrl: './sach-detail.component.html',
  styleUrls: ['./sach-detail.component.css']
 
})
export class SachDetailComponent implements OnInit {

  routerSubscription: any;
  book: any={};
  id: number;
  categories: any[];
  books: any[];
  title: String='';
  constructor(private sachService:SachService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService,
    private categoryService: CategoryService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.categoryService.getCategories().then((categories: any)=>{
    this.categories = categories;
    console.log(this.categories);
    if(this.id==0)
    {
      this.title="You are creating a new book"
      this.book.CategoryId = categories[0].id;
    }
    
  })
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  {
    this.sachService.getBook(this.id).then(res=>{
      this.book = res;
      console.log(this.book);
    })
  }
 
})
  
}

save(){
  this.sachService.saveBook(this.book).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/sach-detail",res.Id]);
    this.notification.success('Saved');
    this.router.navigate(["/main/sach-list"]);
  })
}

back(){
  this.router.navigate(["/main/sach-list"]);
}
ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}