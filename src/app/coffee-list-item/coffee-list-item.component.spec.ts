import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListItemComponent } from './coffee-list-item.component';

describe('CoffeeListItemComponent', () => {
  let component: CoffeeListItemComponent;
  let fixture: ComponentFixture<CoffeeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
