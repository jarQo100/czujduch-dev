import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in.component';
import { SignUpComponent } from './auth/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { MenuComponent } from './content/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    ContentComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
