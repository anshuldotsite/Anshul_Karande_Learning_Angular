import { Component } from '@angular/core';
import { Coffee } from './interfaces/coffee';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  coffees: Coffee[] = [
    {
      name: 'Espresso',
      origin: 'Ethiopia',
      roast: 'Dark',
      price: 2.5,
      inStock: true,
    },
    {
      name: 'Filter',
      origin: 'Guatemala',
      roast: 'Medium',
      price: 2.0,
      inStock: false,
    },
    {
      name: 'Americano',
      origin: 'Brazil',
      roast: 'Medium',
      price: 1.5,
      inStock: true,
    },
    {
      name: 'Latte',
      origin: 'Colombia',
      roast: 'Medium',
      price: 4.0,
      inStock: true,
    },
    {
      name: 'Cappuccino',
      origin: 'Costa Rica',
      roast: 'Medium',
      price: 3.5,
      inStock: false,
    },
    {
      name: 'Mocha',
      origin: 'Sumatra',
      roast: 'Dark',
      price: 5.0,
      inStock: true,
    },
  ];
}
