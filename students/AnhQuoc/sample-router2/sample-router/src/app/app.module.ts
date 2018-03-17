import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {Layout1Component} from './layout1/layout1.component';
import {Layout2Component} from './layout2/layout2.component';
import {Layout3Component} from './layout3/layout3.component';
import {LoginComponent} from './login/login.component';

let routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: MainComponent, children: [
    {path: '', redirectTo: 'layout1', pathMatch: 'full'},
    {path: 'layout1', component: Layout1Component},
    {path: 'layout2', component: Layout2Component},
    {path: 'layout3', component: Layout3Component},
  ]},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
