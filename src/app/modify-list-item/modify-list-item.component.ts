import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoffeeService } from '../Services/coffee.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../Shared/interfaces/coffee';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      inStock: ['false', Validators.required],
      price: ['', Validators.required],
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
