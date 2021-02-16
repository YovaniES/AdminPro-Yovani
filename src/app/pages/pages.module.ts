import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],


  imports: [
    CommonModule,
    SharedModule, /* OJOOOOO */
    PAGES_ROUTES
  ],



  exports:[
    PagesComponent,
    DashboardComponent,
  ]
})



export class PagesModule { }
