import { TestBed } from '@angular/core/testing';

import { CoffeeMenuService } from './coffee-menu.service';

describe('CoffeeMenuService', () => {
  let service: CoffeeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
