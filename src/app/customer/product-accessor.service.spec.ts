import { TestBed } from '@angular/core/testing';

import { ProductAccessorService } from './product-accessor.service';

describe('ProductAccessorService', () => {
  let service: ProductAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
