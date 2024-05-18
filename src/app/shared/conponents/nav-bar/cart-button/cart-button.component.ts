import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  public carts!: number;
  constructor(
    private dataService: DataService
  ) {
    this.subsciriptions();
  }

  ngOnInit() {
  }
  subsciriptions() {
    this.dataService.qtyCarts$().subscribe(data => {
      console.log(data);
      this.carts = data
    })
  }
}
