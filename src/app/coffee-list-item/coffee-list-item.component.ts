import { Component, Input } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-coffee-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './coffee-list-item.component.html',
  styleUrl: './coffee-list-item.component.css',
})
export class CoffeeListItemComponent {
  @Input() inStock?: Coffee;
}
