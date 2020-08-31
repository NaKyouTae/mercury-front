import { TestBed } from '@angular/core/testing';

import { CashObservableService } from './cash-observable.service';

describe('CashObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CashObservableService = TestBed.get(CashObservableService);
    expect(service).toBeTruthy();
  });
});
