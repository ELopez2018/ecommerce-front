import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsStoreComponent } from './dogs-store.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DogsStoreHomeComponent } from './dogs-store-home/dogs-store-home.component';
import { DogsStoreRoutes } from './dogs-store.routing';
const COMPONENTS = [
  DogsStoreComponent,
  DogsStoreHomeComponent
]
const MODULES =[
  CommonModule,
  RouterModule,
  DogsStoreRoutes,
  SharedModule
]
@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [...COMPONENTS]
})
export class DogsStoreModule { }
