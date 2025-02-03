import { TestBed } from '@angular/core/testing';

import { LogisticaMaritimaService } from './logistica-maritima.service';

describe('LogisticaMaritimaService', () => {
  let service: LogisticaMaritimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisticaMaritimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
