import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalTitleEnums, ModalTypeButtons } from 'src/app/core/enums/modal-enums.enum';
import { Company } from 'src/app/core/interfaces/company';
import { Item } from 'src/app/core/interfaces/item';
import { Cart } from 'src/app/core/models/cart';
import { DataService } from 'src/app/core/services/data/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public item!: Item;
  private company!: Company
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCompany$()
    .subscribe(data => {
      console.log({data});
      this.company = data
    })
  }

  goSale(item: Item){

  }
  sendCart() {
    let items: Item[] = []
    items.push({ ...this.item })
    let cart = new Cart(items,  this.company)
    this.dataService.addCart(cart)
    Swal.fire({
      title: ModalTitleEnums.CART,
      text: ModalTitleEnums.SALE_TO_CART,
      icon: ModalTypeButtons.SUCCESS
    });
  }
  see(){
    this.dataService.setProductSelected(this.item)
    this.router.navigateByUrl('ventas')
  }
}
