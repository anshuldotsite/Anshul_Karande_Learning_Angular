import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import { CoffeeListItemComponent } from '../coffee-list-item/coffee-list-item.component';
import { CoffeeService } from '../Services/coffee.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CoffeeListItemComponent, NgIf, NgFor],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent implements OnInit {
  selectedCoffeeItem?: Coffee;

  CoffeeItems: Coffee[] = [];

  constructor(private CoffeeService: CoffeeService) {}

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
    this.CoffeeService.updateMenuItem(item);
  }

  deleteCoffeeItem(id: number) {
    this.CoffeeService.deleteMenuItem(id);
  }
}
