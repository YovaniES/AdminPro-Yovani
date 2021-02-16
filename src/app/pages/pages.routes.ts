import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";



const pagesRoutes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }];



  export  const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)



  /* usamos forChil para usar rutas hijas */
