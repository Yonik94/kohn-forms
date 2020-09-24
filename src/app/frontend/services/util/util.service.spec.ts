import { TestBed } from '@angular/core/testing';

import { utilService } from './util.service';

describe('UtilService', () => {
  let service: utilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(utilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
