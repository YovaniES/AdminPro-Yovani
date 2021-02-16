import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';

const appRoutes = [
  { path: 'login', component: LoginComponent },
  {path:'register', component : RegisterComponent},
  { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
/* OJO: uso de hash:true    aun falta configurar video 21 */
