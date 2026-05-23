import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();



  addToCart(product: any, qty: number = 1) {
    const item = this.cartItems.find(p => p.id === product.id);

    if (item) {
      item.quantity += qty;
    } else {
      this.cartItems.push({ ...product, quantity: qty });
    }

    this.cartSubject.next(this.cartItems);
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== id);
    this.cartSubject.next(this.cartItems);
  }

  updateQuantity(id: number, qty: number) {
    const item = this.cartItems.find(p => p.id === id);
    if (item && qty > 0) {
      item.quantity = qty;
    }
    this.cartSubject.next(this.cartItems);
  }

  getTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.quantity * (item.discounted_price || item.price),
      0
    );
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
