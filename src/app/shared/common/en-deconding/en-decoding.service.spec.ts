import { TestBed } from '@angular/core/testing';

import { EnDecodingService } from './en-decoding.service';

describe('EnDecodingService', () => {
  let service: EnDecodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnDecodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
