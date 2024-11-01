import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeService } from './Services/coffee.service';
import { CoffeeListItemComponent } from './coffee-list-item/coffee-list-item.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CoffeeListComponent,
    CoffeeListItemComponent,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Coffee Shop';

  constructor(private CoffeeService: CoffeeService) {}
}
