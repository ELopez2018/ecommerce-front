import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data/data.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart';

@Component({
  selector: 'cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  public carts: Cart[]=[];
  public totalItems =0;
  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.subsciriptions();
  }

  ngOnInit() {
  }
  subsciriptions() {
    this.dataService.getCarts$().subscribe(data => {
      this.carts = data
    })

    this.dataService.getTotalItems$().subscribe(data => {
      this.totalItems = data
    })

  }
  goToCart(){
    if(this.carts.length === 1){
      this.dataService.setCart(this.carts[0])
      this.router.navigateByUrl("ventas/carrito")
    } else {
      this.showListCart()
    }
  }

  showListCart(){

  }
}
