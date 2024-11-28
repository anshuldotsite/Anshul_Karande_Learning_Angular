import { Component, Input } from '@angular/core';
import { Coffee } from '../Shared/interfaces/coffee';
import {
  NgIf,
  DatePipe,
  CurrencyPipe,
  UpperCasePipe,
  NgOptimizedImage,
} from '@angular/common';
import { AvailabilityColorPipe } from '../Shared/pipes/availabilty-color.pipe';
import { CoffeeStrengthPipe } from '../Shared/pipes/coffee-strength.pipe';
import { HoverHighlightDirective } from '../Shared/directives/hover-highlight.directive';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-coffee-list-item',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    AvailabilityColorPipe,
    CoffeeStrengthPipe,
    HoverHighlightDirective,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    NgOptimizedImage,
  ],
  templateUrl: './coffee-list-item.component.html',
  styleUrl: './coffee-list-item.component.css',
})
export class CoffeeListItemComponent {
  @Input() inStock?: Coffee;
  today: Date = new Date();
}
