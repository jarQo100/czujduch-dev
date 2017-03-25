import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in.component';
import { SignUpComponent } from './auth/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { LogoutComponent } from './auth/logout.component';
import { StopnieComponent } from './content/stopnie/stopnie.component';
import { AddStopienComponent } from './content/stopnie/add/add.component';
import { StopnieService } from './content/stopnie/stopnie.service';
import { ModalService } from './shared/modal/modal.service';
import { ModalComponent } from './shared/modal/modal.component';
import { TopAlertComponent } from './shared/top-alert/topalert.component';
import { TopAlertService } from './shared/top-alert/topalert.service';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    ContentComponent,
    NavbarComponent,
    MenuComponent,
    DashboardComponent,
    LogoutComponent,
    StopnieComponent,
    AddStopienComponent,
    ModalComponent,
    TopAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [AuthService, StopnieService, ModalService, TopAlertService], 
  bootstrap: [AppComponent]
})
export class AppModule { }


