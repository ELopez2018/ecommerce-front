import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapsComponent } from './scraps.component';
import { ScrapsRoutes } from './scraps.routing';
import { ScrapsHeaderComponent } from './scraps-header/scraps-header.component';
import { ScrapsHomeComponent } from './scraps-home/scraps-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScrapsStoreComponent } from './scraps-store/scraps-store.component';
import { RouterModule } from '@angular/router';
import { ScrapsSaleComponent } from './scraps-sale/scraps-sale.component';
const COMPONENTS = [
  ScrapsHeaderComponent,
  ScrapsComponent,
  ScrapsHomeComponent,
  ScrapsStoreComponent,
  ScrapsSaleComponent
]
@NgModule({
  imports: [
    CommonModule,
    ScrapsRoutes,
    RouterModule,
    SharedModule
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS
  ]
})
export class ScrapsModule { }
