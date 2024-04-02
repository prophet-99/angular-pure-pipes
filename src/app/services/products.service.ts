import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  public getProducts(searchTerm: string): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products) =>
          products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
  }
}
