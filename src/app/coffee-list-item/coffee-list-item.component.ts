import { Component, Input } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import {
  NgIf,
  NgOptimizedImage,
  DatePipe,
  CurrencyPipe,
  UpperCasePipe,
  NgClass,
} from '@angular/common';
import { AvailabilityColorPipe } from '../Shared/pipes/availabilty-color.pipe';
import { CoffeeStrengthPipe } from '../Shared/pipes/coffee-strength.pipe';
import { HoverHighlightDirective } from '../Shared/directives/hover-highlight.directive';

@Component({
  selector: 'app-coffee-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    NgClass,
    AvailabilityColorPipe,
    CoffeeStrengthPipe,
    HoverHighlightDirective,
  ],
  templateUrl: './coffee-list-item.component.html',
  styleUrl: './coffee-list-item.component.css',
})
export class CoffeeListItemComponent {
  @Input() inStock?: Coffee;
  today: Date = new Date();
}
