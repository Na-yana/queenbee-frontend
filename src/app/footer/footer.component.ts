import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 currentYear: number = new Date().getFullYear();

categories: any[] = [];

constructor(private categoryService: CategoryService) {}

ngOnInit() {
  this.categoryService.getCategories().subscribe((res: any) => {
    this.categories = res;
  });
}
}
