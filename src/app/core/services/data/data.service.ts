import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart } from '../../models/cart';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private carts$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([])
  private carts: Cart[] = []
  constructor() { }
  public setCarts(carts: Cart[]): void {
    this.carts = carts;
    this.carts$.next(this.carts)
  }
  public getCarts(): Cart[] {
    return this.carts;
  }
  public getCarts$(): Observable<Cart[]> {
    return this.carts$.asObservable();
  }
  public addCart(cart: Cart): void {
    this.carts.push(cart)
    this.carts$.next(this.carts)
  }
  public removeCart(index: number): void {
    this.carts.splice(index, 1)
    this.carts$.next(this.carts)
  }
  public qtyCarts$(): Observable<number> {
    return of(this.carts.length);
  }
}
