import {Routes} from '@angular/router';
import {RoleListComponent} from "./main/role-list/role-list.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {RoleDetailComponent} from "./main/role-detail/role-detail.component";
import {NotFoundComponent} from "./main/not-found/not-found.component";
import {UserListComponent} from "./main/user-list/user-list.component";
import {UserDetailComponent} from "./main/user-detail/user-detail.component";
import {CustomerDetailComponent} from "./main/customer/customer-detail/customer-detail.component";
import {CustomerListComponent} from "./main/customer/customer-list/customer-list.component";
import {BookDetailComponent} from "./main/book/book-detail/book-detail.component";
import {BookListComponent} from "./main/book/book-list/book-list.component";
import {CategoryDetailComponent} from "./main/category/category-detail/category-detail.component";
import {CategoryListComponent} from "./main/category/category-list/category-list.component";

export const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'main', component: MainComponent, children: [
        {path: '', redirectTo: 'role-list', pathMatch: 'full'},
        {path: 'role-list', component: RoleListComponent},
        {path: 'role/:id', component: RoleDetailComponent},
        {path: 'user/:id', component: UserDetailComponent},
        {path: 'user-list', component: UserListComponent},
        {path: 'customer/:id', component: CustomerDetailComponent},
        {path: 'customer-list', component: CustomerListComponent},
        {path: 'book/:id', component: BookDetailComponent},
        {path: 'book-list', component: BookListComponent},
        {path: 'category/:id', component: CategoryDetailComponent},
        {path: 'category-list', component: CategoryListComponent},

    ]
    },
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
]