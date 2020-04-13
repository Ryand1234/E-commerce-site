import { TestBed } from '@angular/core/testing';

import { ShowProdService } from './show-prod.service';

describe('ShowProdService', () => {
  let service: ShowProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
