import { TestBed } from '@angular/core/testing';

import { NumRowsService } from './num-rows.service';

describe('NumRowsService', () => {
  let service: NumRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
