import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FeaturedComponent } from './featured/featured.component';
import { PartnersCarouselComponent } from './partners-carousel/partners-carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENT = [
  HomeComponent,
  FeaturedComponent,
  PartnersCarouselComponent
]
@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule
  ],
  declarations: [...COMPONENT]
})
export class HomeModule { }
