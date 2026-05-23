import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-popup',
  templateUrl: './add-to-cart-popup.component.html',
  styleUrls: ['./add-to-cart-popup.component.css']
})
export class AddToCartPopupComponent {
  @Input() product: any;
  @Input() cartCount = 0;
  @Output() close = new EventEmitter<void>();


  constructor(private router: Router) {}

  goToCheckout() {
    
    this.close.emit();


    this.router.navigate(['/checkout']);
  }
}



