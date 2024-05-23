import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { SaleComponent } from './pages/sale/sale.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: "full" },
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'retazos', loadChildren: () => import('./pages/scraps/scraps.module').then(m => m.ScrapsModule),
  },
  {
    path: 'tienda-para-perros', loadChildren: () => import('./pages/dogs-store/dogs-store.module').then(m => m.DogsStoreModule),
  },
  // Compartidos
  {
    path: 'ventas', component: SaleComponent,
  },
  {
    path: 'ventas/carrito', component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
