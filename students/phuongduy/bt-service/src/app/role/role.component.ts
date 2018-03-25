import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles : any[];
  constructor(
    private roleService : RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roleService.getRoleList().then((roles:any[])=>{
      this.roles = roles;
    })
  }

  detail(role){
    this.router.navigate(['main/role-detail',role.Id]);
    
}

}
