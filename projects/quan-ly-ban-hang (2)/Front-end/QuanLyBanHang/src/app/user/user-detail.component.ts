import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role/role.service';
import * as $ from 'jquery';
import { NotifyService } from '../services/notify.service';
@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
    Id: number;
    user: any = {};
    roles: any;
    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private router: Router,
        private roleService: RoleService,
        private notifyService: NotifyService
    ) { }

    ngOnInit() {
        
        this.activatedRoute.params.subscribe(params=>{
            this.Id = +params['Id'];
            if(this.Id > 0){
                this.userService.getUserDetail(this.Id).then(user=>{
                    this.user = user;
                }).catch(err=>{
                    alert(err);
                });
            }
        });

        this.roleService.getRoleList().then(roles=>{
            this.roles = roles;
            console.log("lay roles thanh cong");
        }).catch(err=>{
            console.log("lay roles that bai");
        })
    }
   
    save(){
        this.userService.saveUser(this.user).then(user=>{
            this.notifyService.success("Saved");
            this.router.navigate(['/main/user']);
        }).catch(()=>{
            this.notifyService.error("Save Error!");
        });
    }

}
