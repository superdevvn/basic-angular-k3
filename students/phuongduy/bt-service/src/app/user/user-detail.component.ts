import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
    Id: number;
    user: any = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private router: Router

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
        })
    }
   
    save(){
        this.userService.saveUser(this.user).then(user=>{
            alert("Luu thanh cong");
            this.router.navigate(['/main/user']);
        })
    }
    
}
