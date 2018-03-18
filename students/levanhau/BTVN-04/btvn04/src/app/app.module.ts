import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { SalesStatsProductsComponent } from './sales-stats-products/sales-stats-products.component';
import { SalesStatsPurchasesComponent } from './sales-stats-purchases/sales-stats-purchases.component';
import { SalesStatsClientsComponent } from './sales-stats-clients/sales-stats-clients.component';
import { SalesStatsGeneralSettingsComponent } from './sales-stats-general-settings/sales-stats-general-settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', redirectTo: 'dashboard1', pathMatch: 'full' },
      { path: 'dashboard1', component: Dashboard1Component },
      { path: 'dashboard2', component: Dashboard2Component },
      { path: 'sales-stats-products', component: SalesStatsProductsComponent },
      { path: 'sales-stats-purchases', component: SalesStatsPurchasesComponent },
      { path: 'sales-stats-clients', component: SalesStatsClientsComponent },
      { path: 'sales-stats-general-settings', component: SalesStatsGeneralSettingsComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Dashboard1Component,
    Dashboard2Component,
    LoginComponent,
    SalesStatsProductsComponent,
    SalesStatsPurchasesComponent,
    SalesStatsClientsComponent,
    SalesStatsGeneralSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
