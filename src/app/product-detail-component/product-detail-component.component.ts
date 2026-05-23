import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls: ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent implements OnInit {

  product: any;
  quantity: number = 1;
  qty = 1;
  showPopup = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cartService: CartService,
    private router: Router

  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductDetails(productId);
  }

  getProductDetails(id: number) {
    this.productService.getProductById(id).subscribe(res => {
      this.product = res;
    });
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
    this.showPopup = true;
  }

  buyNow() {
    // 1️⃣ Add product to cart
    this.cartService.addToCart({
      ...this.product,
      quantity: this.quantity
    });

    // 2️⃣ Redirect to checkout page
    this.router.navigate(['/checkout']);
  }

}
