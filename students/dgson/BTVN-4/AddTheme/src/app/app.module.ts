import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { Layout3Component } from './layout3/layout3.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { LoginService } from './login/login.service';

let routes : Routes = [
  {path: '',redirectTo: 'main' ,pathMatch:"full"},
  {path: 'main',component:MainComponent,children: [
    {path:'',redirectTo:'layout1',pathMatch:"full"},
    {path:'layout1',component:Layout1Component},
    {path:'layout2',component:Layout2Component},
    {path:'layout3',component:Layout3Component},
  ]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
