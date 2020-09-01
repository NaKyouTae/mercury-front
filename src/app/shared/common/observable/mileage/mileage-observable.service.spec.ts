import { TestBed } from '@angular/core/testing';

import { MileageObservableService } from './mileage-observable.service';

describe('MileageObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MileageObservableService = TestBed.get(MileageObservableService);
    expect(service).toBeTruthy();
  });
});
