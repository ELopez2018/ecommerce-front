import { Routes, RouterModule } from '@angular/router';
import { DogsStoreHomeComponent } from './dogs-store-home/dogs-store-home.component';

const routes: Routes = [
  { path: '', component: DogsStoreHomeComponent },
];

export const DogsStoreRoutes = RouterModule.forChild(routes);
