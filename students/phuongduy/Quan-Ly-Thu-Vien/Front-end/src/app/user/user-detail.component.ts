import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ApiService } from '../services/api.service';
import { UserService } from './user.service';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  routerSubscription: any;
  user: any={};
  id: number;
  roles: any[];
  users: any[];
  title: string='';
  constructor(private userService:UserService, private route:ActivatedRoute, private router: Router,
     private notification: NotificationService, private apiService:ApiService,private roleService: RoleService) { }

  ngOnInit() {
this.routerSubscription = this.route.params.subscribe(params=>{
  this.roleService.getRoles().then((roles:any)=>{
    this.roles = roles;
    console.log(this.roles);
    if(this.id==0){
      this.user.RoleId=roles[0].Id;
    }
  });
  this.id = +params['id']; //convert string 'id' to a number
  if (this.id >0){
  this.title= "You are editing profile of a user"
  this.userService.getUser(this.id).then(res=>{
    this.user = res;
    console.log(this.user);
  })
}
  else this.title ="You are creating a new user";

})
this.userService.getUsers().then((users: any) => {
  this.users = users;
}
)}


save(){
  this.userService.saveUser(this.user).then((res:any)=>{
    if(this.id ===0) this.router.navigate(["/main/user-detail",res.Id]);
    this.notification.success('Saved');
    this.router.navigate(["/main/user-list"]);
  })
}

back(){
  this.router.navigate(["/main/user-list"])
}

ngOnDestroy(){
  this.routerSubscription.unsubscribe();
}


  
}