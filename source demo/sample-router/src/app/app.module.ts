import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {LayoutNo1Component} from './layout-no1/layout-no1.component';
import {LayoutNo2Component} from './layout-no2/layout-no2.component';
import {LayoutNo3Component} from './layout-no3/layout-no3.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {ApiService} from './services/api.service';
import {LoginService} from './login/login.service';
import {CookieService} from 'ngx-cookie-service';
import {RoleListComponent} from './role-list/role-list.component'
import {RoleService} from "./role-list/role.service";
import { UserComponent } from './user/user.component';
import {UserService} from "./user/user.service";
import { RoleDetailComponent } from './role-detail/role-detail.component';


let routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: "full"},
    {
        path: 'main', component: MainComponent, children: [
        {path: '', redirectTo: 'layout1', pathMatch: "full"},
        {path: 'layout1', component: LayoutNo1Component},
        {path: 'layout2', component: LayoutNo2Component},
        {path: 'layout3', component: LayoutNo3Component},
        {path: 'role-list', component: RoleListComponent},
        {path: 'role-list:id', component: RoleListComponent},
        {path: 'user-list', component: UserComponent},
    ]
    },
    {path: 'login', component: LoginComponent}
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
        UserComponent,
        RoleDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [ApiService, LoginService, CookieService, RoleService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
