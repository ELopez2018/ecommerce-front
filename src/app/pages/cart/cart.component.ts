import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { Cart } from 'src/app/core/models/cart';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart!: Cart;
  public total=0;
  constructor(private dataService: DataService) {
    this.dataService.getCart$().subscribe(data => {
      this.cart = data;
    })
  }

  ngOnInit() {
  }

  getTotal(){
    this.total = this.cart.getTotal()
  }
}
