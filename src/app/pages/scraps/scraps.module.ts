import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapsComponent } from './scraps.component';
import { ScrapsRoutes } from './scraps.routing';
import { ScrapsHeaderComponent } from './scraps-header/scraps-header.component';
import { ScrapsHomeComponent } from './scraps-home/scraps-home.component';
const COMPONENTS = [
  ScrapsHeaderComponent,
  ScrapsComponent,
  ScrapsHomeComponent
]
@NgModule({
  imports: [
    CommonModule,
    ScrapsRoutes
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...COMPONENTS
  ]
})
export class ScrapsModule { }
