import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://queenbee-backend-2p7p.onrender.com/api/products/';

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
    `https://queenbee-backend-2p7p.onrender.com/api/category-offer/${categoryId}/`
  );

}

searchProducts(keyword: string) {
    return this.http.get(
      `https://queenbee-backend-2p7p.onrender.com/api/products/search/?q=${keyword}`
    );
  }

}
