import { Injectable } from '@angular/core';
import { Coffee } from '../interfaces/coffee';
import { CoffeeItems } from '../data/coffee-items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeMenuService {
  private menu: Coffee[] = CoffeeItems;
  constructor() {}
  getMenu(): Observable<Coffee[]> {
    return of(CoffeeItems);
  }
}
