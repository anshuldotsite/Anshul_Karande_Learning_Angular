import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import { CoffeeListItemComponent } from '../coffee-list-item/coffee-list-item.component';
import { CoffeeService } from '../Services/coffee.service';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    NgOptimizedImage,
    CoffeeListItemComponent,
  ],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent implements OnInit {
  selectedCoffeeItem?: Coffee;

  CoffeeItems: Coffee[] = [];

  constructor(private CoffeeService: CoffeeService, private Router: Router) {}

  ngOnInit() {
    this.CoffeeService.getMenu().subscribe({
      next: (data) => {
        this.CoffeeItems = data;
      },
      error: (err) => {
        console.error('Error fetching coffee items:', err);
      },
    });
  }

  selectCoffee(id: number) {
    this.CoffeeService.getMenuById(id).subscribe({
      next: (item) => {
        if (item) {
          this.selectedCoffeeItem = item;
        } else {
          console.warn('Coffee item not found');
        }
      },
      error: (err) => {
        console.error('Error fetching coffee item:', err);
      },
    });
  }

  updateCoffeeItem(item: Coffee) {
    this.selectedCoffeeItem = item;
    this.Router.navigate(['modify-coffee', item]);
  }

  deleteCoffeeItem(id: number) {
    this.CoffeeService.deleteMenuItem(id);
    this.CoffeeItems = this.CoffeeItems.filter((item) => item.id !== id);
  }
}
