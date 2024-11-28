import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoffeeService } from '../Services/coffee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../Shared/interfaces/coffee';
import { HighlightOnFocusDirective } from '../Shared/directives/highlight-on-focus.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css',
})
export class ModifyListItemComponent implements OnInit {
  coffeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coffeeService: CoffeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.coffeeForm = this.formBuilder.group({
      id: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(1),
        ],
      ],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9s]*$')]],
      price: ['', [Validators.required, Validators.min(0)]],
      inStock: ['false', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coffeeService.getMenuById(parseInt(id)).subscribe({
        next: (item) => {
          if (item) {
            item.image = item.image || '';
            this.coffeeForm.setValue(item);
          } else {
            console.warn('Coffee item not found');
          }
        },
        error: (err) => {
          console.error('Error fetching coffee item:', err);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.coffeeForm.valid) {
      const coffee: Coffee = this.coffeeForm.value;

      if (coffee.id) {
        this.coffeeService.updateMenuItem(coffee).subscribe(() => {
          this.router.navigate(['/coffee']);
        });
      } else {
        coffee.id = this.coffeeService.generateNewId();
        this.coffeeService.addMenuItem(coffee).subscribe(() => {
          this.router.navigate(['/coffee']);
        });
      }
    }
  }
}
