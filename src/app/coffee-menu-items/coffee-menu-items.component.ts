import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Coffee } from '../interfaces/coffee';

@Component({
  selector: 'app-coffee-menu-items',
  standalone: true,
  imports: [NgIf],
  templateUrl: './coffee-menu-items.component.html',
  styleUrl: './coffee-menu-items.component.css',
})
export class CoffeeMenuItemsComponent {
  @Input() item: Coffee | undefined;
}
