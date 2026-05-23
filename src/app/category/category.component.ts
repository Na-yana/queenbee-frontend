import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, Category } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  newArrivalProducts: any[] = [];

  constructor(private categoryService: CategoryService, private router: Router ) {}
  

  ngOnInit(): void {
    this.getCategories();
    this.getNewArrivalProducts();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
        console.log(this.categories);
      },
      error: (error: any) => {
        console.error('Error fetching categories', error);
      }
    });
  }

  openCategory(categoryId: number) {
  this.router.navigate(['/products', categoryId]);
}

getNewArrivalProducts(): void {

  const newArrivalCategoryId = 8;

  this.categoryService
    .getProductsByCategory(newArrivalCategoryId)
    .subscribe((res: any) => {

      this.newArrivalProducts = res.map((item: any) => {

        item.image =
          'https://queenbee-backend-2p7p.onrender.com' + item.image;

        return item;

      });

    });

}

}
