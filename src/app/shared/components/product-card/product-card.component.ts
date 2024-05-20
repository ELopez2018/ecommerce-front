import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/core/interfaces/item';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public item!: Item;
  constructor() { }

  ngOnInit() {
  }

}
