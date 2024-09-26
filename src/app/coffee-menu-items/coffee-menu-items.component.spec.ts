import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeMenuItemsComponent } from './coffee-menu-items.component';

describe('CoffeeMenuItemsComponent', () => {
  let component: CoffeeMenuItemsComponent;
  let fixture: ComponentFixture<CoffeeMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeMenuItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
