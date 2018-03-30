import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { DashboardV1Component } from './dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ApiService } from './services/api.service';
import { RoleComponent } from './role/role.component';
import {RoleService} from './role/role.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { RoleDetailComponent } from './role/role-detail.component';
import { UserDetailComponent } from './user/user-detail.component';
import { NotifyService } from './services/notify.service';
import { LoadingService } from './services/loading.service';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent} ,
  {path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboardv1', pathMatch: 'full' },
      { path: 'dashboardv1', component: DashboardV1Component },
      { path: 'dashboardv2', component: DashboardV2Component },
      { path: 'dashboardv3', component: DashboardV3Component },
      { path: 'role', component: RoleComponent },
      { path: 'role-detail/:Id', component: RoleDetailComponent },
      { path: 'user', component: UserComponent },
      { path: 'user-detail/:Id', component: UserDetailComponent },
      { path: 'products', component: ProductsComponent },
      {path:'products-detail/:Id',component:ProductsDetailComponent},
  ]}
  

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardV1Component,
    DashboardV2Component,
    DashboardV3Component,
    MainComponent,
    LoginComponent,
    RoleComponent,
    RoleDetailComponent,
    UserComponent,
    UserDetailComponent,
    ProductsComponent,
    ProductsComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [LoginService, ApiService, 
    CookieService, RoleService, 
    UserService, NotifyService, 
    LoadingService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
