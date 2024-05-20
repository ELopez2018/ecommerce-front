import { Company } from "../interfaces/company";
import { Item } from "../interfaces/item";

export class Cart {
  private company: Company;
  private items: Item[] = [];
  constructor(items: Item[], company: Company) {
    this.company = company
    this.items = items
  }
  public getCompany(): Company {
    return this.company;
  }
  public setCompany(company: Company): void {
    this.company = company;
  }
  public getItems(): Item[] {
    return this.items;
  }
  public setItems(items: Item[]): void {
    this.items = items;
  }
  public addItem(item: Item): void {
    this.items.push(item);
  }
  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }
  public getQuantityItems(): number {
    return this.items.length;
  }
  public getSubTotal(): number {
    return this.items.reduce((total, item) => total + (item.precio +  item.cantidad), 0);
  }
  public getTaxe(): number {
    return this.items.reduce((total, item) => total + (item.iva * item.cantidad), 0);
  }
  public getTotal(): number {
    return this.items.reduce((total, item) => total + (item.total * item.cantidad), 0);
  }

}
