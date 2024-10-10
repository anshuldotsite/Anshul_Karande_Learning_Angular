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
    return of(this.menu);
  }

  getMenuById(id: number): Observable<Coffee | undefined> {
    const item = this.menu.find((item) => item.id === id);
    return of(item);
  }

  addMenuItem(newItem: Coffee): Observable<Coffee[]> {
    this.menu.push(newItem);
    return of(this.menu);
  }

  updateMenuItem(updateItem: Coffee): Observable<Coffee[]> {
    const index = this.menu.findIndex((item) => item.id === updateItem.id);
    if (index !== -1) {
      this.menu[index] = updateItem;
    }
    return of(this.menu);
  }

  deleteMenuItem(id: Number): Observable<Coffee | undefined> {
    const deleteItem = this.menu.find((item) => item.id === id);
    this.menu = this.menu.filter((item) => item.id !== id);
    return of(deleteItem);
  }
}
