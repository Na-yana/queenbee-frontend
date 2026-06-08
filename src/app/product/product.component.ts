import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  categories: any[] = [];

  offerBanner: any;

  selectedCategory: string = '';

  currentPage: number = 1;

itemsPerPage: number = 6;

paginatedProducts: any[] = [];

totalPages: number = 0;

  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {

    

  this.getCategories();

  this.route.paramMap.subscribe(params => {

    const categoryId = params.get('categoryId');

    if (categoryId) {

      this.getProductsByCategory(categoryId);

    }

  });

}

  getCategories(): void {

  this.categoryService.getCategories().subscribe((res: any) => {

    this.categories = res;

    const categoryId = this.route.snapshot.paramMap.get('categoryId');

    const selected = this.categories.find(
      (cat: any) => cat.id == categoryId
    );

    if (selected) {
      this.selectedCategory = selected.name;
    }

  });

}

  getProductsByCategory(categoryId: any): void {

    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((res: any) => {

        this.products = res;

        this.currentPage = 1;

        this.updatePagination();

        this.getCategoryOffer(categoryId);

        const selected = this.categories.find(
          cat => cat.id == categoryId
        );

        if (selected) {
          this.selectedCategory = selected.name;
        }

      });

  }

  changeCategory(category: any) {

    this.selectedCategory = category.name;

    this.router.navigate(['/products', category.id]);

  }

  changePage(page: number): void {

  this.currentPage = page;

  this.updatePagination();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}

updatePagination(): void {

  const startIndex =
    (this.currentPage - 1) * this.itemsPerPage;

  const endIndex =
    startIndex + this.itemsPerPage;

  this.paginatedProducts =
    this.products.slice(startIndex, endIndex);

  this.totalPages = Math.ceil(
    this.products.length / this.itemsPerPage
  );

}

shareOnWhatsApp(product: any, event: Event): void {

  event.stopPropagation();

  const productUrl =
    `${window.location.origin}/product/${product.id}`;

  const text =
    `Check out this product: ${product.name} ${productUrl}`;

  const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, '_blank');

}

shareOnInstagram(product: any, event: Event): void {

  event.stopPropagation();

  const productUrl =
    `${window.location.origin}/product/${product.id}`;

  navigator.clipboard.writeText(productUrl).then(() => {
  alert('Product link copied!');
});

}

getCategoryOffer(categoryId: any): void {

  this.productService
    .getCategoryOffer(categoryId)
    .subscribe({

      next: (res: any) => {

        if (res.image) {

          res.image =
            'https://api.qbwomensessential.com' + res.image;

        }

        this.offerBanner = res;

        console.log(this.offerBanner);

      },

      error: (err) => {

        console.error('Offer API Error:', err);

      }

    });

}

}