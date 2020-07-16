import { TestBed } from '@angular/core/testing';

import { CommonValidationService } from './common-validation.service';

describe('CommonValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonValidationService = TestBed.get(CommonValidationService);
    expect(service).toBeTruthy();
  });
});
