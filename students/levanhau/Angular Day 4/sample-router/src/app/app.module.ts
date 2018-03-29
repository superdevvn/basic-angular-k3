import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { LayoutNo1Component } from './layout-no1/layout-no1.component';
import { LayoutNo2Component } from './layout-no2/layout-no2.component';
import { LayoutNo3Component } from './layout-no3/layout-no3.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { LoginService } from './login/login.service';
import { RoleListComponent } from './role/role-list.component';
import { RoleService } from './role/role.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { CategoryComponent } from './category/category.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleDetailService } from './role-detail/role-detail.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'layout-no1', pathMatch: 'full' },
      { path: 'layout-no1', component: LayoutNo1Component },
      { path: 'layout-no2', component: LayoutNo2Component },
      { path: 'layout-no3', component: LayoutNo3Component },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'user', component: UserComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutNo1Component,
    LayoutNo2Component,
    LayoutNo3Component,
    MainComponent,
    LoginComponent,
    RoleListComponent,
    RoleDetailComponent,
    UserComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService, ApiService, LoginService, RoleService, UserService, RoleDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
