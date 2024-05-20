import { Routes, RouterModule } from '@angular/router';
import { ScrapsComponent } from './scraps.component';
import { ScrapsHomeComponent } from './scraps-home/scraps-home.component';
import { ScrapsStoreComponent } from './scraps-store/scraps-store.component';
import { ScrapsSaleComponent } from './scraps-sale/scraps-sale.component';
import { ScrapsCartComponent } from './scraps-cart/scraps-cart.component';

const routes: Routes = [
  {
    path:'', component: ScrapsComponent,
    children: [
     { path:'', component: ScrapsHomeComponent},
     { path:'tienda', component: ScrapsStoreComponent},
     { path:'tienda/venta', component: ScrapsSaleComponent},
     { path:'tienda/venta/carrito', component: ScrapsCartComponent},
    ]
   },
];

export const ScrapsRoutes = RouterModule.forChild(routes);
