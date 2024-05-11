import { Routes, RouterModule } from '@angular/router';
import { ScrapsComponent } from './scraps.component';
import { ScrapsHomeComponent } from './scraps-home/scraps-home.component';
import { ScrapsStoreComponent } from './scraps-store/scraps-store.component';

const routes: Routes = [
  {
    path:'', component: ScrapsComponent,
    children: [
     { path:'', component: ScrapsHomeComponent},
     { path:'tienda', component: ScrapsStoreComponent},
    ]

   },
];

export const ScrapsRoutes = RouterModule.forChild(routes);
