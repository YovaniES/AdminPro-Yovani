import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
import { APP_ROUTES } from './app.routes';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
  ],


  imports: [
    BrowserModule,
    APP_ROUTES,     /* importamoss nuestros routers */
    PagesModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
