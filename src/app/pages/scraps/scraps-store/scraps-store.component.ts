import { Component, OnInit } from '@angular/core';
import { ProductsMocks } from './mocks/products-mock';
import { Item } from 'src/app/core/interfaces/item';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data/data.service';

@Component({
  selector: 'app-scraps-store',
  templateUrl: './scraps-store.component.html',
  styleUrls: ['./scraps-store.component.scss']
})
export class ScrapsStoreComponent implements OnInit {
  public productList = ProductsMocks;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  goSale(item: Item){
    this.dataService.setProductSelected(item)
    this.router.navigateByUrl('ventas')
  }
}
