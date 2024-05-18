import { Component, OnInit } from '@angular/core';
import { ProductsMocks } from './mocks/products-mock';

@Component({
  selector: 'app-scraps-store',
  templateUrl: './scraps-store.component.html',
  styleUrls: ['./scraps-store.component.scss']
})
export class ScrapsStoreComponent implements OnInit {
  public productList = ProductsMocks;
  constructor() { }

  ngOnInit() {
  }

}
