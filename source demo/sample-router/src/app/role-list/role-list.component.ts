import { Component, OnInit } from '@angular/core';
import {RoleService} from '../role-list/role.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles: any[];

  constructor(private roleSV: RoleService,private router: Router ) {
  }

  ngOnInit() {
    this.roleSV.getList().then((data: any)=>this.roles = data)
  }

  detail(role:any){
    this.router.navigate(['main/role-detail', role.Id])
  }


  delete(role){

  }

}
