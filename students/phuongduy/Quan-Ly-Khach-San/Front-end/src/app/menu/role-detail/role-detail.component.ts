import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleDetailService } from './role-detail.service';
import { NotificationService } from '../../notification.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  routerSubscription: any;
  id: number;
  role: any = {};
  title: string;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private roledetailService: RoleDetailService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {//
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id > 0) {
        this.title = "BẠN ĐANG CHỈNH SỬA MỘT VAI TRÒ";
        this.roledetailService.getRole(this.id).then(res => {
          this.role = res;
          console.log(this.role);
        });
      }
      else this.title = "BẠN ĐANG THÊM MỚI MỘT VAI TRÒ";
    });
  }
  save() {
    this.roledetailService.saveRole(this.role).then((res: any) => {
      if (this.id == 0) this.router.navigate(["/main/role-detail", res.id]);
      this.notificationService.success('Saved');
    })
  }
  back() {
    this.router.navigate(["/main/role-list"]);
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }


}
