import { Routes } from "@angular/router";


import { DashboardComponent } from "./dashboard/dashboard.component";

export const CONTENT_ROUTES: Routes = [
    //{ path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: '', component: DashboardComponent }
    
];