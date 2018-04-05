import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role/role.service';
import * as $ from 'jquery';
import { NotifyService } from '../services/notify.service';
import {Location} from '@angular/common';
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
        private notifyService: NotifyService,
        private location: Location
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

        this.roleService.getRoles().then(roles=>{
            this.roles = roles;
        }).catch(err=>{
        })
    }
   
    save(){
        this.userService.saveUser(this.user).then(user=>{
            this.notifyService.printEditSuccess();
           this.location.back();
        }).catch(()=>{
            this.notifyService.error("Có lỗi xảy ra!");
        });
    }
    goBack(){
        this.location.back();
    }
}
