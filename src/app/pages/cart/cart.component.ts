import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { Cart } from 'src/app/core/models/cart';
import Swal from 'sweetalert2'
import { UtilsService } from '../../shared/Utils/Utils.service';
import { WidgetCheckoutData } from 'src/app/core/interfaces/wompi';
import { environment } from 'src/environments/environment';
declare var ePayco: any;
declare var WidgetCheckout: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart!: Cart;
  public total = 0;
  public sign!: string;
  public reference!: string;
  public checkout: any;
  public dataToPay!: WidgetCheckoutData;
  private currency = 'COP'
  constructor(private dataService: DataService, private utilsService: UtilsService) {
    this.dataService.getCart$().subscribe(data => {
      this.cart = data;
    })
    this.reference = `${this.utilsService.getCodeReference()}`;
    this.utilsService.wompiIntegritySignature(this.reference, 25000, 'COP').then(data => {
      this.sign = data
    })
  }

  ngOnInit() {
  }

  getTotal() {
    this.total = this.cart.getTotal()
  }

  async goToPay() {
    this.checkout = new WidgetCheckout(await this.dataToPayment())
    console.log( this.checkout);

    this.checkout.open(function (result: any, error:any) {
      var transaction = result.transaction;
      console.log("Transaction ID: ", transaction.id);
      console.log("Transaction object: ", transaction);
      console.log({error});
    });
  }

  async dataToPayment(): Promise<any> {
    let data: WidgetCheckoutData = <WidgetCheckoutData>{}
    const reference = this.utilsService.getCodeReference()
    let signature: any;
    signature = await this.utilsService.wompiIntegritySignature(reference,this.amount(10000.50),this.currency)
    console.log({signature});
    data = {
      currency: this.currency,
      amountInCents: this.amount(10000.50),
      signature: {integrity : signature},
      reference: reference,
      publicKey: environment.WOMPI_PUB_KEY,
      redirectUrl: environment.URL_WEB_SITIE,
      taxInCents: this.taxes(),
      customerData: this.customerData(),
      shippingAddress: this.shippingAddress(),
      payment_method: this.paymenMmethod(),
      expirationTime: '2024-06-09T20:28:50.000Z',
    }
    return data
  }

  amount(value: number) {
    return value * 100
  }
  taxes() {
    return {
      vat: 1900,
      consumption: 800,
    }
  }
  customerData() {
    return {
      email: "estarlin.elv@gmail.com",
      fullName: "Estarlin Lopez",
      phoneNumber: "3204454846",
      phoneNumberPrefix: '+57',
      legalId: "1365875",
      legalIdType: 'CE',
    }
  }

  shippingAddress() {
    return {
      addressLine1: "Direccion Larga",
      city: "Ciudad",
      phoneNumber: "3204454846",
      region: "Meta",
      country: 'CO',
    }
  }

  paymenMmethod() {
    return {
      type: 'NEQUI',
      phone_number: '3991111111',
    }
  }
}
