import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './menu/user-list/user-list.component';
import { UserDetailComponent } from './menu/user-detail/user-detail.component';
import { RoleListComponent } from './menu/role-list/role-list.component';
import { RoleDetailComponent } from './menu/role-detail/role-detail.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { RoleListService } from './menu/role-list/role-list.service';
import { CookieService } from 'ngx-cookie-service';
import { RoleDetailService } from './menu/role-detail/role-detail.service';
import { UserListService } from './menu/user-list/user-list.service';
import { NhanVienComponent } from './menu/nhan-vien/nhan-vien.component';
import { PhongComponent } from './menu/phong/phong.component';
import { DichVuComponent } from './menu/dich-vu/dich-vu.component';
import { LoadingService } from './loading.service';
import { NotificationService } from './notification.service';
import { UserDetailService } from './menu/user-detail/user-detail.service';
import { ThuePhongComponent } from './menu/thue-phong/thue-phong.component';
import { PhongService } from './menu/phong/phong.service';
import { RoomDetailComponent } from './menu/room-detail/room-detail.component';
import { RoomDetailService } from './menu/room-detail/room-detail.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MenuComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dich-vu', component: DichVuComponent },
      { path: 'room-list', component: PhongComponent },
      { path: 'nhan-vien', component: NhanVienComponent },
      { path: 'thue-phong', component: ThuePhongComponent },
      { path: 'room-detail/:id', component: RoomDetailComponent }
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    RoleListComponent,
    RoleDetailComponent,
    LoginComponent,
    DashboardComponent,
    NhanVienComponent,
    PhongComponent,
    DichVuComponent,
    ThuePhongComponent,
    RoomDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService,
    LoginService,
    RoleListService,
    CookieService,
    RoleDetailService,
    UserListService,
    LoadingService,
    NotificationService,
    UserDetailService,
    PhongService,
    RoomDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
