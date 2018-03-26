import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {
    Id: number;
    role: any = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private roleService: RoleService,
        private router: Router

    ) { }

    ngOnInit() {
        
        this.activatedRoute.params.subscribe(params=>{
            this.Id = +params['Id'];
            if(this.Id > 0){
                this.roleService.getRoleDetail(this.Id).then(role=>{
                    this.role = role;
                }).catch(err=>{
                    alert(err);
                });
            }
        })
    }
    save(){
        this.roleService.saveRole(this.role).then(res=>{
            alert("Luu thanh cong");
            this.router.navigate(['/main/role']);
        })
    }
    
}
