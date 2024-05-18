import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './conponents/header/header.component';
import { NavBarComponent } from './conponents/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MenuResponsiveComponent } from './conponents/nav-bar/menu-responsive/menu-responsive.component';
import { MenuDesktopComponent } from './conponents/nav-bar/menu-desktop/menu-desktop.component';
import { CartButtonComponent } from './conponents/nav-bar/cart-button/cart-button.component';
import { SubNavbarComponent } from './conponents/sub-navbar/sub-navbar.component';
import { ProductCardComponent } from './conponents/product-card/product-card.component';
const COMPONENTS = [
  HeaderComponent,
  NavBarComponent,
  MenuResponsiveComponent,
  MenuDesktopComponent,
  CartButtonComponent,
  SubNavbarComponent,
  ProductCardComponent,

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
