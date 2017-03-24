import { Routes } from "@angular/router";


import { DashboardComponent } from "./dashboard/dashboard.component";
import { StopnieComponent } from './stopnie/stopnie.component';
import { AddStopienComponent } from './stopnie/add/add.component';

export const CONTENT_ROUTES: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'stopnie', component: StopnieComponent },
    { path: 'stopnie/dodaj', component: AddStopienComponent }
];