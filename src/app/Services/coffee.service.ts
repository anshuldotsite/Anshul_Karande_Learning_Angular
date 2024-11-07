import { Injectable } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import { CoffeeItems } from '../Shared/data/coffee-items';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private menu: Coffee[] = CoffeeItems;

  // constructor(private http: HttpClient) {}

  getMenu(): Observable<Coffee[]> {
    return of(CoffeeItems);
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

  deleteMenuItem(id: Number): Observable<Coffee[]> {
    this.menu = this.menu.filter((item) => item.id !== id);
    return of(this.menu);
  }

  getMenuById(id: number): Observable<Coffee | undefined> {
    const item = this.menu.find((item) => item.id === id);
    return of(item);
  }

  generateNewId(): number {
    return this.menu.length > 0
      ? Math.max(...this.menu.map((menu) => menu.id)) + 1
      : 1;
  }
}
