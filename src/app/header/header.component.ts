import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 // header.component.ts

showSearch = false;

searchTerm = '';
  products: any[] = [];

  constructor(private productService: ProductServiceService) {}

  onSearch() {

    if (this.searchTerm.trim().length < 2) {
      this.products = [];
      return;
    }

    this.productService
      .searchProducts(this.searchTerm)
      .subscribe((res: any) => {
        this.products = res;
      });

  }


}
