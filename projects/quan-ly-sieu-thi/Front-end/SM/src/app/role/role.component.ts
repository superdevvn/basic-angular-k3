import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { reject } from 'q';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[];
  constructor(private router: Router,
    private roleService: RoleService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
      this.loadingService.stop();
    }).catch(err => {
      this.loadingService.stop();
      this.notifyService.error("Loading failed!");
    })
  }

  newRole() {
    this.router.navigate(['main/role-detail', 0]);
  }

  detail(role) {
    this.router.navigate(['main/role-detail', role.Id]);
  }

  delete(role) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.roleService.deleteRole(role.Id).then(() => {
        this.notifyService.success("Delete successful!");
        this.roleService.getRoles().then((roles: any) => {
          this.roles = roles;
        }).catch(err => {
          this.notifyService.error("Reloading failed!");
        });
      }).catch(err => {
        this.notifyService.error(err.message);
      })
    }).catch(err => {
      this.notifyService.error("Deleting failed!");
    });
  }
}
