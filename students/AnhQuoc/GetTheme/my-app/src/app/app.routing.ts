import {Routes} from '@angular/router';
import {RoleListComponent} from "./main/role-list/role-list.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {RoleDetailComponent} from "./main/role-detail/role-detail.component";
import {NotFoundComponent} from "./main/not-found/not-found.component";
import {UserListComponent} from "./main/user-list/user-list.component";
import {UserDetailComponent} from "./main/user-detail/user-detail.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'main', component: MainComponent, children: [
        {path: '', redirectTo: 'role-list', pathMatch: 'full'},
        {path: 'role-list', component: RoleListComponent},
        {path: 'role/:id', component: RoleDetailComponent},
        {path: 'user/:id', component: UserDetailComponent},
        {path: 'user-list', component: UserListComponent},

    ]
    },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
]