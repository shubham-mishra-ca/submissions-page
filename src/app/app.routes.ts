import { Routes } from '@angular/router';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component'; 

export const routes: Routes = [
  { path: '', redirectTo: '/submissions', pathMatch: 'full' }, 
  { path: 'submissions', component: SubmissionsListComponent },
];
