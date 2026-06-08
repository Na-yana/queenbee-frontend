import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://api.qbwomensessential.com/api/products/';

  // private apiUrl = 'http://127.0.0.1:8000/api/products/';

  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?category=${categoryId}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

getCategoryOffer(categoryId: any) {

  return this.http.get(
    `https://api.qbwomensessential.com/api/category-offer/${categoryId}/`
  );

}

searchProducts(keyword: string) {
  return this.http.get(
    `https://api.qbwomensessential.com/api/products/?q=${keyword}`
  );
}

}
