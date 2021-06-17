import { TestBed } from '@angular/core/testing';

import { ComsumoService } from './comsumo.service';

describe('ComsumoService', () => {
  let service: ComsumoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComsumoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
