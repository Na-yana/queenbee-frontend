import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 currentYear: number = new Date().getFullYear();
 categories = [
  'Bra',
  'Panty',
  'Sportswear',
  'Nightwear',
  'Shapewear',
  'Lingerie Set',
  'Camisole & Slips',
  'Accessories',
  'Clothing'
];
}
