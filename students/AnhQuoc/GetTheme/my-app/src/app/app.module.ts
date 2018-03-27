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
import { UserDetailComponent } from './main/user-detail/user-detail.component';
import {UserDetailService} from "./main/user-detail/user-detail.service";


@NgModule({
    declarations: [
        AppComponent,
        RoleListComponent,
        LoginComponent,
        MainComponent,
        RoleDetailComponent,
        NotFoundComponent,
        UserListComponent,
        UserDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [
        ApiServiceService,
        RoleListService,
        LoginService,
        CookieService,
        RoleDetailService,
        NotificationService,
        UserListService,
        UserDetailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
