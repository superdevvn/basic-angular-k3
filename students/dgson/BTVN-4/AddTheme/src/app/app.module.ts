import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {RoleListComponent} from './role/role-list.component';
import {RoleDetailComponent} from './role/role-detail.component';

import { LoginService } from './login/login.service';
import { ApiService } from '../services/api.service';
import { RoleService } from './role/role.service';

let routes : Routes = [
  {path: '',redirectTo: 'login' ,pathMatch:"full"},
  {path: 'main',component:MainComponent,children: [
    {path:'',redirectTo:'layout1',pathMatch:"full"},
    {path:'layout1',component:Layout1Component},
    {path:'layout2',component:Layout2Component},
    {path:'layout3',component:Layout3Component},
    {path:'role-list',component:RoleListComponent},
    {path:'role-detail/:id',component:RoleDetailComponent},
  ]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    MainComponent,
    LoginComponent,
    RoleListComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, LoginService, RoleService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
