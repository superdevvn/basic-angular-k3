import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import {CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { LayoutNo1Component } from './layout-no1/layout-no1.component';
import { LayoutNo2Component } from './layout-no2/layout-no2.component';
import { LayoutNo3Component } from './layout-no3/layout-no3.component';
import { RoleListComponent } from './role/role-list.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { LoginService } from './login/login.service';
import { RoleService } from './role/role.service';
import { RoleDetailComponent } from './role/role-detail.component';

let routes: Routes = [
  { path :'', redirectTo:'main' ,pathMatch:"full"},
  { 
    path :'main', component:MainComponent, children: [
    { path :'', redirectTo:'layout1' ,pathMatch:"full"},
    { path :'layout1', component:LayoutNo1Component},
    { path :'layout2', component:LayoutNo2Component},
    { path :'layout3', component:LayoutNo3Component},
    { path :'role-list', component:RoleListComponent},
    { path :'role-detail/:Id', component:RoleDetailComponent}
  ]
},
  { path :'login', component:LoginComponent}
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
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService, ApiService, LoginService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
