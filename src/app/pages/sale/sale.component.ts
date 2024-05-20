import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { Item } from 'src/app/core/interfaces/item';
import { Cart } from 'src/app/core/models/cart';
import { Company } from 'src/app/core/interfaces/company';
import Swal from 'sweetalert2'
import { ModalTitleEnums, ModalTypeButtons } from 'src/app/core/enums/modal-enums.enum';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  public product!: Item;
  constructor(private dataService: DataService) {
    this.subcriptionToData()
  }

  ngOnInit() {
  }
  subcriptionToData() {
    this.dataService.getProductSelected$()
      .subscribe(data => {
        this.product = data
      })
  }

  sendCart() {
    let company: Company = { id: 1, name: 'Neyi' }
    let items: Item[] = []
    items.push({ ...this.product })
    let cart = new Cart(items, company)
    this.dataService.addCart(cart)

    Swal.fire({
      title: ModalTitleEnums.CART,
      text: ModalTitleEnums.SALE_TO_CART,
      icon: ModalTypeButtons.SUCCESS
    });
  }
}
