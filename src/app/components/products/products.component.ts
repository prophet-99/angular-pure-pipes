import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, EMPTY, Observable, switchMap } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]> = EMPTY;
  public searchTerm$ = new BehaviorSubject<string>('');

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.searchTerm$.pipe(
      switchMap((term) => this.productsService.getProducts(term))
    );
  }
}
