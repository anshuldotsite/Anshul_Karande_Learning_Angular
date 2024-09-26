import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-menu-items',
  standalone: true,
  imports: [],
  templateUrl: './coffee-menu-items.component.html',
  styleUrl: './coffee-menu-items.component.css',
})
export class CoffeeMenuItemsComponent {
  CoffeeItems = [
    {
      name: 'Espresso',
      description:
        'Strong coffee brewed by forcing steam through finely-ground coffee beans.',
      price: 2.5,
    },
    {
      name: 'Filter',
      Description:
        'Coffee brewed by filtering hot water through ground coffee beans.',
      price: 2.0,
    },
    {
      name: 'Americano',
      description:
        'Espresso with hot water added to dilute the strength of the coffee.',
      price: 1.5,
    },
    {
      name: 'Latte',
      description: 'Espresso with steamed milk and a small amount of foam.',
      price: 4.0,
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and a larger amount of foam.',
      price: 3.5,
    },
    {
      name: 'Mocha',
      description:
        'Espresso with steamed milk, chocolate syrup, and whipped cream.',
      price: 5.0,
      image: '../../../assets/images/mocha.jpg',
    },
  ];
}
