import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount',
  // pure: false,
})
export class CalculateDiscountPipe implements PipeTransform {
  transform(price: number, rate: number): number {
    console.log('============ Execute heavy process ============');

    if (rate <= 3.5) return price - price * 0.5;
    else return price - price * 0.1;
  }
}
