import { Routes } from "@angular/router";


import { DashboardComponent } from "./dashboard/dashboard.component";
import { StopnieComponent } from './stopnie/stopnie.component';

export const CONTENT_ROUTES: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'stopnie', component: StopnieComponent }
    
];