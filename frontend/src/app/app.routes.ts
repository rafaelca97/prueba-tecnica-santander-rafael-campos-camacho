import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidate/:id', component: CandidateDetailComponent },
  { path: '**', redirectTo: '' }
];

