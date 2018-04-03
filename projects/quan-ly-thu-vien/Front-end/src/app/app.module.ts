import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RoleListComponent} from './main/role-list/role-list.component';
import {appRoutes} from "./app.routing";
import {ApiServiceService} from "./service/api-service.service";
import {RoleListService} from "./main/role-list/role-list.service";
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component'
import {LoginService} from "./login/login.service";
import {CookieService} from "ngx-cookie-service";
import {RoleDetailComponent} from './main/role-detail/role-detail.component';
import {RoleDetailService} from "./main/role-detail/role-detail.service";
import {NotificationService} from "./service/notification.service";
import {NotFoundComponent} from './main/not-found/not-found.component';
import {UserListComponent} from './main/user-list/user-list.component';
import {UserListService} from "./main/user-list/user-list.service";
import {UserDetailComponent} from './main/user-detail/user-detail.component';
import {UserDetailService} from "./main/user-detail/user-detail.service";
import {CustomerListComponent} from './main/customer/customer-list/customer-list.component';
import {CustomerDetailComponent} from './main/customer/customer-detail/customer-detail.component';
import {CategoryListComponent} from './main/category/category-list/category-list.component';
import {CategoryDetailComponent} from './main/category/category-detail/category-detail.component';
import {BookListComponent} from './main/book/book-list/book-list.component';
import {BookDetailComponent} from './main/book/book-detail/book-detail.component';
import {BookService} from "./main/book/book.service";
import {CategoryService} from "./main/category/category.service";
import {CustomerService} from "./main/customer/customer.service";
import {LoadingService} from "./service/loading.service";
import {LoadingModule} from "ngx-loading";
import { BookingComponent } from './main/booking/booking.component';


@NgModule({
    declarations: [
        AppComponent,
        RoleListComponent,
        LoginComponent,
        MainComponent,
        RoleDetailComponent,
        NotFoundComponent,
        UserListComponent,
        UserDetailComponent,
        CustomerListComponent,
        CustomerDetailComponent,
        CategoryListComponent,
        CategoryDetailComponent,
        BookListComponent,
        BookDetailComponent,
        BookingComponent,

    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        LoadingModule
    ],
    providers: [
        ApiServiceService,
        RoleListService,
        LoginService,
        CookieService,
        RoleDetailService,
        NotificationService,
        UserListService,
        UserDetailService,
        BookService,
        CategoryService,
        CustomerService,
        LoadingService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
