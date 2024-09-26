import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Coffee } from './interfaces/coffee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  coffees: Coffee[] = [
    {
      name: 'Espresso',
      origin: 'Ethiopia',
      roast: 'dark',
      price: 2.5,
      inStock: true,
    },
    {
      name: 'Latte',
      origin: 'Colombia',
      roast: 'medium',
      price: 3.5,
      inStock: true,
    },
    {
      name: 'Filter',
      origin: 'Guatemala',
      roast: 'medium',
      price: 3.0,
      inStock: false,
    },
    {
      name: 'Americano',
      origin: 'Brazil',
      roast: 'medium',
      price: 2.5,
      inStock: true,
    },
    {
      name: 'Cappuccino',
      origin: 'Costa Rica',
      roast: 'medium',
      price: 3.5,
      inStock: false,
    },
    {
      name: 'Mocha',
      origin: 'Sumatra',
      roast: 'dark',
      price: 4.0,
      inStock: true,
    },
  ];
}
