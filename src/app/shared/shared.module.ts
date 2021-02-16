import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [

    NopagefoundComponent,/* para Rutas invalidas */
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],



  imports: [
    CommonModule,
  ],

  exports:[
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,

  ]
})
export class SharedModule { }
