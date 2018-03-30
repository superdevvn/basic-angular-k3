import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  id: number;
  user:  any = {};
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private notifyService: NotifyService

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = +params['id'];
      if (this.id > 0) {
        this.userService.getUser(this.id).then(user=>{
          this.user = user;
        })
      }
    });
  }

  save() {
    this.userService.saveUser(this.user).then((user:any)=>{
      if(this.id==0) this.router.navigate(['main/role-detail'])
      this.notifyService.success("OK con de");
    }).catch(err=>{
      this.notifyService.error("sai roi ban ei!!!");
    })
  }

}
