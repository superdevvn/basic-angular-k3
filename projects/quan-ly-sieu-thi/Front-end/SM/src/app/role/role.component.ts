import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { reject } from 'q';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[];
  constructor(private router: Router,
    private roleService: RoleService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.roleService.getRoles().then((roles: any[]) => {
      this.roles = roles;
      this.loadingService.stop();
    }).catch(err => {
      // this.loadingService.stop();
    })
  }

  newRole() {
    this.router.navigate(['main/role-detail', 0]);
  }

  detail(role) {
    this.router.navigate(['main/role-detail', role.Id]);
  }

}
