import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: "full" },
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'retazos', loadChildren: () => import('./pages/scraps/scraps.module').then(m => m.ScrapsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
