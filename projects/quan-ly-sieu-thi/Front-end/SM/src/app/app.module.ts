import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './user/listuser.component';
import { UserdetailComponent } from './user/userdetail.component';
import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http';
import { LoadingService } from './services/loading.service';
import { NotifyService } from './services/notify.service';
import { UserService } from './user/user.service';
import { MainService } from './main/main.service';
import { RoleComponent } from './role/role.component';
import { InOutComponent } from './in-out/in-out.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ProductComponent } from './product/product.component';
import { UnitComponent } from './unit/unit.component';
import { CategoryComponent } from './category/category.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { RoleService } from './role/role.service';
import { RoleDetailComponent } from './role/role-detail.component';
import { ManuDetailComponent } from './manufacturer/manu-detail.component';
import { ManufacturerService } from './manufacturer/manufacturer.service';
import { WarehouseDetailComponent } from './warehouse/warehouse-detail.component';
import { WarehouseService } from './warehouse/warehouse.service';
import { UnitDetailComponent } from './unit/unit-detail.component';
import { UnitService } from './unit/unit.service';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductService } from './product/product.service';
import { CateDetailComponent } from './category/cate-detail.component';
import { CategoryService } from './category/category.service';
import { InoutService } from './in-out/inout.service';
import { InoutDetailComponent } from './in-out/inout-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'user-list', component: ListuserComponent },
      { path: 'user-detail/:id', component: UserdetailComponent },
      { path: 'role-list', component: RoleComponent },
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'manu-list', component: ManufacturerComponent },
      { path: 'manu-detail/:id', component: ManuDetailComponent },
      { path: 'product-list', component: ProductComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'cate-list', component: CategoryComponent },
      { path: 'cate-detail/:id', component: CateDetailComponent },
      { path: 'wh-list', component: WarehouseComponent },
      { path: 'wh-detail/:id', component: WarehouseDetailComponent },
      { path: 'unit-list', component: UnitComponent },
      { path: 'unit-detail/:id', component: UnitDetailComponent },
      { path: 'inout-list', component: InOutComponent },
      { path: 'inout-detail/:id', component: InoutDetailComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ListuserComponent,
    UserdetailComponent,
    RoleComponent,
    InOutComponent,
    ManufacturerComponent,
    ProductComponent,
    UnitComponent,
    CategoryComponent,
    WarehouseComponent,
    RoleDetailComponent,
    ManuDetailComponent,
    WarehouseDetailComponent,
    UnitDetailComponent,
    ProductDetailComponent,
    CateDetailComponent,
    InoutDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CookieService,
    ApiService,
    NotifyService,
    LoadingService,
    LoginService,
    UserService,
    MainService,
    RoleService,
    ManufacturerService,
    WarehouseService,
    UnitService,
    ProductService,
    CategoryService,
    InoutService,
    ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
