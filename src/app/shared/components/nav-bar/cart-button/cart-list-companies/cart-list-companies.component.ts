import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models/cart';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'cart-list-companies',
  templateUrl: './cart-list-companies.component.html',
  styleUrls: ['./cart-list-companies.component.scss']
})
export class CartListCompaniesComponent implements OnInit {
  public carts: Cart[]=[];
  @Output() onCliked: EventEmitter<boolean> = new EventEmitter()
  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.subsciriptions()
   }

  ngOnInit() {
  }
  subsciriptions() {
    this.dataService.getCarts$().subscribe(data => {
      this.carts = data
    })

  }
  goToCart(cart: Cart){
      this.onCliked.emit(false);
      this.dataService.setCart(cart)
      this.router.navigateByUrl("ventas/carrito")
  }
}
