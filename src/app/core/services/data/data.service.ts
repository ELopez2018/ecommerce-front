import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart } from '../../models/cart';
import { Item } from '../../interfaces/item';
import { Company } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private carts$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([])
  private carts: Cart[] = []
  private productSelected$: BehaviorSubject<Item> = new BehaviorSubject<Item>(<Item>{})
  private cartSelected$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(<Cart>{})
  private totalItems$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private companySelected$: BehaviorSubject<Company> = new BehaviorSubject<Company>(<Company>{})

  constructor() { }
  
  public setCarts(carts: Cart[]): void {
    this.carts = carts;
    this.carts$.next(this.carts)
    this.totalItems$.next(this.getAllQtyItems())
  }
  public getCarts(): Cart[] {
    return this.carts;
  }
  public getCarts$(): Observable<Cart[]> {
    return this.carts$.asObservable();
  }
  public addCart(cart: Cart): void {
    if (!this.filterCart(cart)) {
      return;
    }
    this.carts.push(cart)
    this.carts$.next(this.carts)
    this.totalItems$.next(this.getAllQtyItems())
  }
  public removeCart(index: number): void {
    this.carts.splice(index, 1)
    this.carts$.next(this.carts)
    this.totalItems$.next(this.getAllQtyItems())
  }
  public qtyCarts$(): Observable<number> {
    return of(this.carts.length);
  }

  public setProductSelected(item: Item): void {
    this.productSelected$.next(item)
  }
  public getProductSelected$(): Observable<Item> {
    return this.productSelected$.asObservable();
  }
  private filterCart(cart: Cart) {
    if (this.carts.length < 1) { return true; }

    this.carts.forEach(item => {

      if (item.getCompany().id === cart.getCompany().id) {

        item.getItems().forEach(i => {
          cart.getItems().forEach(data => {
            if (data.id == i.id) {
              i.cantidad += data.cantidad
            } else {
              if (!item.getItems().find(a => a.id === data.id)) {
                item.addItem(data)
              }
            }
          })
        })

        this.carts$.next(this.carts)
        this.totalItems$.next(this.getAllQtyItems())
        return false;
      } else {
        return true
      }
    })
    return false;
  }

  public setCart(cart: Cart): void {
    this.cartSelected$.next(cart)
  }
  public getCart$(): Observable<Cart> {
    return this.cartSelected$.asObservable();
  }

  private getAllQtyItems(): number {
    let totalItmes = 0;
    this.carts.forEach(cart => {
      cart.getItems().forEach(item => {
        totalItmes += item.cantidad
      })
    })

    return totalItmes;
  }

  getTotalItems$(): Observable<number>{
    return  this.totalItems$.asObservable()
  }
}
