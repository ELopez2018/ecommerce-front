import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapsComponent } from './scraps.component';
import { ScrapsRoutes } from './scraps.routing';
import { ScrapsHeaderComponent } from './scraps-header/scraps-header.component';
import { ScrapsHomeComponent } from './scraps-home/scraps-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScrapsStoreComponent } from './scraps-store/scraps-store.component';
const COMPONENTS = [
  ScrapsHeaderComponent,
  ScrapsComponent,
  ScrapsHomeComponent,
  ScrapsStoreComponent
]
@NgModule({
  imports: [
    CommonModule,
    ScrapsRoutes,
    SharedModule
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS
  ]
})
export class ScrapsModule { }
