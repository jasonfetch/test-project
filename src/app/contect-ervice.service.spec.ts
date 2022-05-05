import { TestBed } from '@angular/core/testing';

import { ContectErviceService } from './contect-ervice.service';

describe('ContectErviceService', () => {
  let service: ContectErviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContectErviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
