import { Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  updateQty(item: any, qty: number) {
    this.cartService.updateQuantity(item.id, qty);
    this.total = this.cartService.getTotal();
  }

  remove(item: any) {
    this.cartService.removeItem(item.id);
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

}
