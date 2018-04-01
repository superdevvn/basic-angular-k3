import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  id: number;
  user: any = {};
  roles: any[];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private notifyService: NotifyService,
    private loadingService: LoadingService,
    private roleService: RoleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.roleService.getRoles().then((roles: any) => {
        this.roles = roles;
        if (this.id == 0) {
          this.user.RoleId = roles[0].Id;
        }
      });
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-conpw").attr("hidden", "true");
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.userService.getUser(this.id).then(user => {
          this.user = user;
          this.loadingService.stop();
        }).catch(err => {
          this.notifyService.error("Undefined error!");
        })
      };
    });
  }

  cancel() {
    this.router.navigate(['main/user-list']);
  }

  //chưa save đc
  save() {
    this.userService.saveUser(this.user).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/user-detail", res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(["main/user-list"]);
    }).catch(err => {
      this.notifyService.error("Save fail!");
    });
  }

}
