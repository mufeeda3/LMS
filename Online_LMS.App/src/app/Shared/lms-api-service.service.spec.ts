import { TestBed } from '@angular/core/testing';

import { LmsApiServiceService } from './lms-api-service.service';

describe('LmsApiServiceService', () => {
  let service: LmsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
