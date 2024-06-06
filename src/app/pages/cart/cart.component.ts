import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { Cart } from 'src/app/core/models/cart';
import Swal from 'sweetalert2'
import { UtilsService } from '../../shared/Utils/Utils.service';
import { WidgetCheckoutData } from 'src/app/core/interfaces/wompi';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/core/interfaces/item';
import { ModalMessagesEnums, ModalTitleEnums, ModalTypeButtons } from 'src/app/core/enums/modal-enums.enum';
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
  public reference!: string;
  public checkout: any;
  public dataToPay!: WidgetCheckoutData;
  private currency = 'COP'
  public form!: FormGroup;
  constructor(
    private dataService: DataService,
    private utilsService: UtilsService,
    private fb: FormBuilder
  ) {
    this.dataService.getCart$().subscribe(data => {
      this.cart = data;
    })
    this.reference = `${this.utilsService.getCodeReference()}`;
  }

  ngOnInit() {
    this.IniciatileForm()
  }
  IniciatileForm() {
    this.form = this.fb.group({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumberPrefix: new FormControl("+57", [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
      legalId: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(11)]),
      legalIdType: new FormControl(null, [Validators.required])
    })
  }
  getTotal() {
    this.total = this.cart.getTotal()
  }

  get fullNameInValid() {
    return this.form.get('fullName')?.invalid && this.form.get('fullName')?.touched
  }

  get fullNameValid() {
    return this.form.get('fullName')?.valid && this.form.get('fullName')?.touched
  }
  get emailInValid() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }
  get emailValid() {
    return this.form.get('email')?.valid && this.form.get('email')?.touched
  }

  get phoneCodeInvalid() {
    return this.form.get('phoneNumberPrefix')?.invalid && this.form.get('phoneNumberPrefix')?.touched
  }

  get phoneCodeValid() {
    return this.form.get('phoneNumberPrefix')?.valid
  }
  get phoneNumberInValid() {
    return this.form.get('phoneNumber')?.invalid && this.form.get('phoneNumber')?.touched
  }
  get phoneNumberValid() {
    return this.form.get('phoneNumber')?.valid && this.form.get('phoneNumber')?.touched
  }

  get legalIdTypeInValid() {
    return this.form.get('legalIdType')?.invalid && this.form.get('legalIdType')?.touched
  }
  get legalIdTypeValid() {
    return this.form.get('legalIdType')?.valid && this.form.get('legalIdType')?.touched
  }

  get legalIdInValid() {
    return this.form.get('legalId')?.invalid && this.form.get('legalId')?.touched
  }
  get legalIdValid() {
    return this.form.get('legalId')?.valid && this.form.get('legalId')?.touched
  }

  async goToPay() {
    this.checkout = new WidgetCheckout(await this.dataToPayment())
    Swal.fire({
      title: ModalTitleEnums.WARNING,
      text: ModalMessagesEnums.PAY_WARNING,
      icon: ModalTypeButtons.WARNING,
      imageUrl: "../../../assets/img/wompi_button_fin.png",
    }).then(resp => {
      this.checkout.open(function (result: any, error: any) {
        var transaction = result.transaction;
        console.log("Transaction ID: ", transaction.id);
        console.log("Transaction object: ", transaction);
        console.log(error ? error : "Sin errores");
      });
    });
  }

  async dataToPayment(): Promise<any> {
    let signature: string;
    const reference = this.utilsService.getCodeReference()
    const amount = this.amount(this.cart.getTotal())
    signature = await this.utilsService.wompiIntegritySignature(reference, amount, this.currency)
    return {
      currency: this.currency,
      amountInCents: amount,
      signature: { integrity: signature },
      reference: reference,
      publicKey: environment.WOMPI_PUB_KEY,
      redirectUrl: environment.URL_WEB_SITIE,
      // taxInCents: this.taxes(),
      customerData: this.customerData(),
      // shippingAddress: this.shippingAddress(),
    }
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
    const data: Data = this.form.value
    return {
      email: data.email,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      phoneNumberPrefix: data.phoneNumberPrefix,
      legalId: data.legalId,
      legalIdType: data.legalIdType,
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

  get disabledButtonPay() {
    return this.form.invalid
  }

  remove(item: number) {
    this.cart.removeItem(item)
    this.dataService.updateItems()
  }
}

interface Data {
  fullName: string;
  email: string;
  phoneNumberPrefix: string;
  phoneNumber: number;
  legalId: string;
  legalIdType: string;
}
