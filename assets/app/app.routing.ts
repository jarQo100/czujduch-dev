import { Routes, RouterModule } from "@angular/router";

//import { MessagesComponent } from "./messages/messages.component";
import { AuthComponent } from "./auth/auth.component";
import { ContentComponent } from "./content/content.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { CONTENT_ROUTES } from "./content/content.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
    { path: 'panel', component: ContentComponent, children: CONTENT_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);