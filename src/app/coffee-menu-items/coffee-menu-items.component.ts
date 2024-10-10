import { NgFor } from '@angular/common';
import { Component, Output } from '@angular/core';
import { CoffeeItems } from '../data/coffee-items';
import { Coffee } from '../interfaces/coffee';
import { CoffeeMenuService } from '../services/coffee-menu.service';

@Component({
  selector: 'app-coffee-menu-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-menu-items.component.html',
  styleUrl: './coffee-menu-items.component.css',
})
export class CoffeeMenuItemsComponent {
  CoffeeItems: Coffee[] = [];
  constructor(private CoffeeMenuService: CoffeeMenuService) {}

  ngOnInit(): void {
    this.CoffeeMenuService.getMenu().subscribe({
      next: (coffeeMenu: Coffee[]) => {
        this.CoffeeItems = coffeeMenu;
      },
    });
  }
}
