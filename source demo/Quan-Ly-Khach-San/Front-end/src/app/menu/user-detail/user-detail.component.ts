import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailService } from './user-detail.service';
import { NotificationService } from '../../notification.service';
import { UserListService } from '../user-list/user-list.service';
import { RoleListService } from '../role-list/role-list.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})


export class UserDetailComponent implements OnInit {
  routerSubscription: any;
  id: number;
  user: any = {};
  title: string = '';
  users: any[];
  roles: any[];
  constructor(private router: Router,
    private route: ActivatedRoute,
     private userdetailService: UserDetailService,
    private notificationService: NotificationService,
     private userlistService: UserListService,
    private rolelistService: RoleListService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      this.rolelistService.getRoles().then((roles:any)=>{
        this.roles=roles;
        console.log(this.roles);
        if(this.id==0){
          this.user.RoleId=roles[0].Id;
        }
      });
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG CHỈNH SỬA THÔNG TIN MỘT THÀNH VIÊN";
        this.userdetailService.getUser(this.id).then(res => {
          this.user = res;
          console.log(this.user);
          
        });
      }
      else this.title = "BẠN ĐANG THÊM MỚI MỘT THÀNH VIÊN";
    });
    this.userlistService.getUsers().then((users: any) => {
      this.users = users;
    });
  }
  save() {
    this.userdetailService.saveUser(this.user).then((res: any) => {
      if (this.id == 0) this.router.navigate(['/main/user-detail', res.id]);
      this.notificationService.success('Saved');
    });
  }
  back() {
    this.router.navigate(['/main/user-list']);
  }
}
