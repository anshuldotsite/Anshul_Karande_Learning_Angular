import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-shop-location',
  standalone: true,
  imports: [NgFor],
  templateUrl: './coffee-shop-location.component.html',
  styleUrl: './coffee-shop-location.component.css',
})
export class CoffeeShopLocationComponent {
  shopLocation = [
    {
      name: 'South Windsor Branch',
      address: '3850 Dougall Avenue, Windsor, ON N9G 1X2',
    },
    {
      name: 'Downtown Branch',
      address: '100 Ouellette Avenue, Windsor, ON N9A 6T3',
    },
  ];
}
