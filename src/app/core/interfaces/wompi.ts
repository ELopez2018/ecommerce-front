export interface WidgetCheckoutData {
  currency: string;
  amountInCents: number;
  reference: string;
  publicKey: string;
  redirectUrl: string;
  taxInCents: TaxInCents;
  customerData: CustomerData;
  shippingAddress: ShippingAddress;
  payment_method: Paymentmethod;
  signature: any;
  expirationTime?: string;
}
interface Paymentmethod {
  type: string;
  phone_number: string;
}
interface ShippingAddress {
  addressLine1: string;
  city: string;
  phoneNumber: string;
  region: string;
  country: string;
}
interface CustomerData {
  email: string;
  fullName: string;
  phoneNumber: string;
  phoneNumberPrefix: string;
  legalId: string;
  legalIdType: string;
}
interface TaxInCents {
  vat: number;
  consumption: number;
}
