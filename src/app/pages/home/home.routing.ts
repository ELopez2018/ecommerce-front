import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

const routes: Routes = [
  {
    path:'inicio', component: HomeComponent
   },
];

export const HomeRoutes = RouterModule.forChild(routes);