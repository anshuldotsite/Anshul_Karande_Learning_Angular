import { Component } from '@angular/core';
import { Coffee } from './interfaces/coffee';
import { NgFor, NgIf } from '@angular/common';
import { CoffeeMenuItemsComponent } from './coffee-menu-items/coffee-menu-items.component';
import { CoffeeShopLocationComponent } from './coffee-shop-location/coffee-shop-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, CoffeeMenuItemsComponent, CoffeeShopLocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
