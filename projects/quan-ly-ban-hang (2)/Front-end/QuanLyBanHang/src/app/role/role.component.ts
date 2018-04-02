import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[];

  constructor(
    private roleService: RoleService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.roleService.getRoleList().then((roles: any[]) => {
      this.roles = roles;
    }).then(()=>{
      this.loadingService.stop();
    })
  }

  detail(role) {
    this.router.navigate(['main/role-detail', role.Id]);
  }

  newRole() {
    this.router.navigate(['main/role-detail', 0]);
  }

  delete(roleId) {
    this.roleService.deleteRole(roleId).then(() => {
      this.roleService.getRoleList().then((roles: any[]) => {
        this.roles = roles;
      });
    });
  }
}
