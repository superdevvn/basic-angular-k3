import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userName: string = "";
  passWord: string = "";
  luu: boolean = false;
  email: string = "";
  trangThai: boolean = false;
  admin: string = "";
  super: string = "";
  user: string = "";
  role: string = "";
  constructor() { }

  ngOnInit() {
  }
  dangNhap() {

    if (this.luu === true) {
      var luuText = "Co";
    } else {
      var luuText = "Khong";
    }
    let hello = `UserName: ${this.userName} \nPassWord: ${this.passWord} \nLuu PassWord: ${luuText} \nEmail: ${this.email} \nTrang thai Online: ${this.trangThai} \nVai tro user: ${this.role}`;
    alert(hello);
  }
}
