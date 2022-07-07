import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './customer';
@Injectable({
  providedIn: 'root'
})
export class ProductAccessorService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const url =  'http://localhost:3000/products';
    return this.http.get<Product[]>(url);
  }
}
