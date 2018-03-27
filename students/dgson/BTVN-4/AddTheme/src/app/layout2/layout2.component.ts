import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { NotifyService } from '../../services/notify.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements OnInit {

  constructor(private loadingService: LoadingService,
  private notifyService: NotifyService,
  private apiService: ApiService) { }

  ngOnInit() {
  }

  showLoading() {
    this.loadingService.star();
  }

  success() {
    this.notifyService.success("OK con de!");
  }

  error() {
    this.notifyService.error("co gi do sai sai");
  }

  confirm() {
    this.notifyService.confirm("ABC").then((res:any)=>{
      this.notifyService.success("OK con de!!!");
    }).catch((res:any)=>{
      this.notifyService.error("co gi do sai sai");
    });
  }

   getUser() {
     this.apiService.post('api/getUsers',{}).then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
     });
   }

}
