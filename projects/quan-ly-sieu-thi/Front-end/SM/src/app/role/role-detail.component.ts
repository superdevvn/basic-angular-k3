import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.roleService.getRole(this.id).then(role => {
          this.role = role;
          this.loadingService.stop();
        }).catch(err=>{
          this.notifyService.error("Loading failed!");
          this.loadingService.stop();
        });
      };
    });
  }

  cancel() {
    this.router.navigate(['main/role-list']);
  }

  save() {
    debugger
    this.roleService.saveRole(this.role).then((res: any) => {
      debugger
      if (this.id == 0) this.router.navigate(['main/role-detail', res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(['main/role-list']);
    }).catch(err => {
      this.notifyService.error("Save fail!");
    })
  }

}
