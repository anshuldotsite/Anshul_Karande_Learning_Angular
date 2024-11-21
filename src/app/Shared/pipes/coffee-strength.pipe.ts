import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coffeeStrength',
  standalone: true,
})
export class CoffeeStrengthPipe implements PipeTransform {
  transform(name: string): string {
    const strengthMap: { [key: string]: string } = {
      Espresso: '⭐⭐⭐⭐⭐',
      Americano: '⭐⭐⭐⭐',
      Latte: '⭐⭐',
      Cappuccino: '⭐⭐',
      Mocha: '⭐⭐⭐',
      Filter: '⭐⭐⭐⭐',
    };
    return strengthMap[name] || '⭐⭐⭐';
  }
}
