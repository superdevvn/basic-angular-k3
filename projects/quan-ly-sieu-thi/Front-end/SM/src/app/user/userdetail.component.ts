import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListuserService } from '../user/listuser.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  id: number;
  user: any = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: ListuserService,
    private notityService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-readonly").attr("readonly", "true");
        $(".hl-date").removeAttr("type");
        $(".hl-date").attr("type", "datetime");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.userService.getUser(this.id).then(user => {
          this.user = user;
          this.loadingService.stop();
        });
      };
    });
  }

  cancel(){
    this.router.navigate(['main/user-list']);
  }

  //chưa save đc
  save() {
    this.userService.saveUser(this.user).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/user-detail", res.Id]);
      this.notityService.success("Save successful!");
      this.router.navigate(["main/user-list"]);
    }).catch(err => {
      this.notityService.error("Save failure!");
    });
  }

}
