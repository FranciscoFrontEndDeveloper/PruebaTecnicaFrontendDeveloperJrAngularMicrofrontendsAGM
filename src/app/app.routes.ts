import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TableexpantComponent } from './components/tableexpant/tableexpant.component';
export const routes: Routes = [
 { path: '', component: MainComponent },
 {
  path: 'caracters', 
  loadComponent: () => import('./components/tableexpant/tableexpant.component').then(m => m.TableexpantComponent)
 }
];
