import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Observable } from 'rxjs'; 


export interface Category {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://api.qbwomensessential.com/api/categories';
  

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.apiUrl, category);
  }

  updateCategory(category: Category): Observable<any> {
    return this.http.put(`${this.apiUrl}${category.id}/`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  getProductsByCategory(categoryId: any) {

  return this.http.get(
    `https://api.qbwomensessential.com/api/products/?category=${categoryId}`
  );

}
}
