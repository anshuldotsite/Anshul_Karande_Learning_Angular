import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoffeeService } from '../Services/coffee.service';
import { NgFor } from '@angular/common';

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
    private coffeeService: CoffeeService
  ) {
    this.coffeeForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      inStock: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const coffeData = this.coffeeForm.value;
    this.coffeeService.addMenuItem(coffeData);
    this.coffeeForm.reset();
  }
}
