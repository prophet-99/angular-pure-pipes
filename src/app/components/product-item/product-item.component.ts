import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product!: Product;

  //* BAD METHOD
  // public calculateDiscount(price: number, rate: number): number {
  //   console.log('============ Execute heavy process ============');

  //   if (rate <= 3.5) return price - price * 0.5;
  //   else return price - price * 0.1;
  // }
}
