import { Component, OnInit } from '@angular/core';
import { Coffee } from './interfaces/coffee';
import { NgFor, NgIf } from '@angular/common';
import { CoffeeMenuItemsComponent } from './coffee-menu-items/coffee-menu-items.component';
import { CoffeeShopLocationComponent } from './coffee-shop-location/coffee-shop-location.component';
import { CoffeeMenuService } from './services/coffee-menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, CoffeeMenuItemsComponent, CoffeeShopLocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  featuredItem: Coffee | undefined;
  constructor(private CoffeeMenuService: CoffeeMenuService) {}

  ngOnInit() {
    this.CoffeeMenuService.getMenu().subscribe({
      next: (coffeeMenu: Coffee[]) => {
        this.featuredItem = coffeeMenu.find((item) => item.id === 1);
      },
    });
  }
}
