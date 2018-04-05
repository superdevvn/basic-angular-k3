import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any = {};
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  constructor(private profileService: ProfileService,
    private loadingService: LoadingService,
    private notifyService: NotifyService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.profileService.getAuthorize().then((profile: any) => {
      this.profile = profile;
      this.loadingService.stop();
      this.notifyService.success("Loading Successful!");
    }).catch(err => {
      this.loadingService.stop();
      this.notifyService.error("Loading failed!");
    });
  }

  cancel() {
    this.router.navigate(['main']);
  }

  reset() {
    this.newPassword = null;
    this.oldPassword = null;
    this.confirmNewPassword = null;
  }

  save() {
    // this.profile.Password = this.newPassword;
    this.userService.saveUser(this.profile).then((res: any) => {
      if (this.oldPassword != null && this.confirmNewPassword != null && this.newPassword != null) {
        if (this.newPassword != this.confirmNewPassword) {
          this.notifyService.error("The confirm password does not match!");
          this.reset();
        } else if (this.newPassword == this.confirmNewPassword) {
          debugger
          this.profileService.changePassword(this.oldPassword, this.newPassword).then(() => {
            debugger
            this.notifyService.success("Change successful!");
          }).catch(err => {
            debugger
            console.log(err);
            this.notifyService.error("The current password does not match!");
            this.reset();
          });
        }
      } else {
        this.notifyService.success("Change successful!");
        this.reset();
      }
    }).catch(err => {
      this.notifyService.error("Change failed!");
      this.reset();
    });
  }
}
