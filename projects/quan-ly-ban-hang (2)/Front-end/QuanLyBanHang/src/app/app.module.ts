import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ApiService } from './services/api.service';
import { RoleComponent } from './role/role.component';
import { RoleService } from './role/role.service';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { RoleDetailComponent } from './role/role-detail.component';
import { UserDetailComponent } from './user/user-detail.component';
import { NotifyService } from './services/notify.service';
import { LoadingService } from './services/loading.service';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { UnitComponent } from './unit/unit.component';
import { UnitService } from './unit/unit.service';
import { UnitDetailComponent } from './unit/unit-detail.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerService } from './manufacturer/manufacturer.service';
import { ManufacturerDetailComponent } from './manufacturer/manufacturer-detail.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/category.service';
import { CategoryDetailComponent } from './category/category-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail.component';
import { CustomerService } from './customer/customer.service';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order/order-detail.component';
import { OrderService } from './order/order.service';
import { ProductDetailComponent } from './product/product-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboardv1', pathMatch: 'full' },
      { path: 'role', component: RoleComponent },
      { path: 'role-detail/:Id', component: RoleDetailComponent },
      { path: 'user', component: UserComponent },
      { path: 'user-detail/:Id', component: UserDetailComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product-detail/:Id', component: ProductDetailComponent },
      { path: 'unit', component: UnitComponent },
      { path: 'unit-detail/:Id', component: UnitDetailComponent },
      { path: 'manufacturer', component: ManufacturerComponent },
      { path: 'manufacturer-detail/:Id', component: ManufacturerDetailComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category-detail/:Id', component: CategoryDetailComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'customer-detail/:Id', component: CustomerDetailComponent },
      { path: 'order', component: OrderComponent },
      { path: 'order-detail/:Id', component: OrderDetailComponent },
    ]
  },


];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RoleComponent,
    RoleDetailComponent,
    UserComponent,
    UserDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    UnitComponent,
    UnitDetailComponent,
    ManufacturerComponent,
    ManufacturerDetailComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CustomerComponent,
    CustomerDetailComponent,
    OrderComponent,
    OrderDetailComponent
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
    LoadingService, ProductService,
    UnitService, ManufacturerService,
    CategoryService, CustomerService,
    OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
