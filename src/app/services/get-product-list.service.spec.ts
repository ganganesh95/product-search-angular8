import { TestBed } from '@angular/core/testing';

import { GetProductListService } from './get-product-list.service';

describe('GetProductListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductListService = TestBed.get(GetProductListService);
    expect(service).toBeTruthy();
  });
});
