import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './conponents/header/header.component';
import { NavBarComponent } from './conponents/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
const COMPONENTS = [
  HeaderComponent,
  NavBarComponent
]
const MODULES = [
  CommonModule,
  RouterModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [...COMPONENTS],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
