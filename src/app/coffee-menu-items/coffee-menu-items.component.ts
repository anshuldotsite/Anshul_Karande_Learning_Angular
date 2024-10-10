import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CoffeeItems } from '../data/coffee-items';

@Component({
  selector: 'app-coffee-menu-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-menu-items.component.html',
  styleUrl: './coffee-menu-items.component.css',
})
export class CoffeeMenuItemsComponent {
  CoffeeItems = CoffeeItems;
}
