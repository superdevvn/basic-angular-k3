import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutNo1Component } from './layout-no1/layout-no1.component';
import { LayoutNo2Component } from './layout-no2/layout-no2.component';
import { LayoutNo3Component } from './layout-no3/layout-no3.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

let routes: Routes = [
  { path :'', redirectTo:'main' ,pathMatch:"full"},
  { path :'main', component:MainComponent, children: [
    { path :'', redirectTo:'layout1' ,pathMatch:"full"},
    { path :'layout1', component:LayoutNo1Component},
    { path :'layout2', component:LayoutNo2Component},
    { path :'layout3', component:LayoutNo3Component},
  ]},
  { path :'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutNo1Component,
    LayoutNo2Component,
    LayoutNo3Component,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
