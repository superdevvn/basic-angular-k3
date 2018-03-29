import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListuserService } from '../user/listuser.service';
import { NotifyService } from '../services/notify.service';
import { RoleService } from './role.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  id: number;
  role: any = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService,
    private notityService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.roleService.getRole(this.id).then(role => {
          this.role = role;
          this.loadingService.stop();
        });
      };
    });
  }

  cancel(){
    this.router.navigate(['main/role-list']);
  }

  save() {
    this.roleService.saveRole(this.role).then((res: any) => {
      if (this.id == 0) this.router.navigate(['main/role-detail', res.Id]);
      this.notityService.success("Save successful!");
      this.router.navigate(['main/role-list']);
    }).catch(err => {
      this.notityService.error("Save failure!");
    })
  }

}
