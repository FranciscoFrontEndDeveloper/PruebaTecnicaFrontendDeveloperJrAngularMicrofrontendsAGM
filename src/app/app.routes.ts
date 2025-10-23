import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TableexpantComponent } from './components/tableexpant/tableexpant.component';
export const routes: Routes = [
 { path: '', component: MainComponent },
 {
  path: 'characters', 
  loadComponent: () => import('./components/tableexpant/tableexpant.component').then(m => m.TableexpantComponent)
 },
  {
  path: 'locations', 
  loadComponent: () => import('./components/tableexpant/tableexpant.component').then(m => m.TableexpantComponent)
 },
   {
  path: 'episodes', 
  loadComponent: () => import('./components/tableexpant/tableexpant.component').then(m => m.TableexpantComponent)
 }
];
