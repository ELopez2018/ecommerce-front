import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartButtonComponent } from './components/nav-bar/cart-button/cart-button.component';
import { MenuDesktopComponent } from './components/nav-bar/menu-desktop/menu-desktop.component';
import { MenuResponsiveComponent } from './components/nav-bar/menu-responsive/menu-responsive.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { SaleComponent } from '../pages/sale/sale.component';
import { CartComponent } from '../pages/cart/cart.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { CartListCompaniesComponent } from './components/nav-bar/cart-button/cart-list-companies/cart-list-companies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  HeaderComponent,
  NavBarComponent,
  MenuResponsiveComponent,
  MenuDesktopComponent,
  CartButtonComponent,
  CartListCompaniesComponent,
  SubNavbarComponent,
  ProductCardComponent,
  RatingComponent,
  SaleComponent,
  CartComponent,
  SubHeaderComponent,
  CarouselComponent,
  FooterComponent
]
const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  CarouselModule,
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
