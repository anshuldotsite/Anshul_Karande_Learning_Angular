import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeShopLocationComponent } from './coffee-shop-location.component';

describe('CoffeeShopLocationComponent', () => {
  let component: CoffeeShopLocationComponent;
  let fixture: ComponentFixture<CoffeeShopLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeShopLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeShopLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
