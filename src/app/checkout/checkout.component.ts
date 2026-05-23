import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})


export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService,
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }


  selectedPayment = 'cod';
  placeOrder() {

  if (this.cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  if (this.selectedPayment === 'cod') {

    alert("Order Placed Successfully (Cash on Delivery) 🚚");
    this.cartService.clearCart();

  } else {

    alert("Processing Online Payment...");

    setTimeout(() => {
      alert("Payment Successful ✅");
      this.cartService.clearCart();
    }, 1500);

  }
}


  
}
