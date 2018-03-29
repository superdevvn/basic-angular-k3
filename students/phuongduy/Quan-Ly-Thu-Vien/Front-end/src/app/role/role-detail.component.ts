import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
 
})
export class RoleDetailComponent implements OnInit {

  routerSubscription: any;
  role: any={};
  id: number;
  titles:String='';
  constructor(private roleService:RoleService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0)
  {
  this.titles="You are editting a role";
  this.roleService.getRole(this.id).then(res=>{
    this.role = res;
    console.log(this.role);
  })
}
else this.titles="You are creating a new role";
})
  
}

save(){
  this.roleService.saveRole(this.role).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/role-detail",res.Id]);
    this.notification.success('Saved');
    this.router.navigate(["/main/role-list"]);
  })
}

back(){
  this.router.navigate(["/main/role-list"]);
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}