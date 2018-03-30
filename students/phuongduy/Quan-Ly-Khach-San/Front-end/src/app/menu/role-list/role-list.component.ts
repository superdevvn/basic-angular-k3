import { Component, OnInit } from '@angular/core';
import { RoleListService } from './role-list.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../loading.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];
  constructor(private roleService: RoleListService,
    private router: Router,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
      this.loadingService.stop();
    });
  }

  detail(role) {
    this.router.navigate(["/main/role-detail", role.Id]);
  }
  delete(role) {
    this.roleService.deleteRole(role.Id).then(() => {
      this.roleService.getRoles().then((roles: any[]) => {
        this.roles = roles;
      });
    });
    this.notificationService.success('Deleted');
  }
  create() {
    this.router.navigate(["/main/role-detail", 0]);
  }

}
