import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardV1Component } from './dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';
import { MainComponent } from './main/main.component';

let routes : Routes  = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, children: [
    {path: '', redirectTo: 'dashboardv1', pathMatch: 'full'},
    {path: 'dashboardv1', component: DashboardV1Component},
    {path: 'dashboardv2', component: DashboardV2Component},
    {path: 'dashboardv3', component: DashboardV3Component}
  ]}
]; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardV1Component,
    DashboardV2Component,
    DashboardV3Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
