import { TestBed } from '@angular/core/testing';

import { LogoutInterceptorService } from './logout-interceptor.service';

describe('LogoutInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogoutInterceptorService = TestBed.get(LogoutInterceptorService);
    expect(service).toBeTruthy();
  });
});
