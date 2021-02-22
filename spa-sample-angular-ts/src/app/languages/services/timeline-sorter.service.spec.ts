import { TestBed } from '@angular/core/testing';

import { TimelineSorterService } from './timeline-sorter.service';

describe('TimelineSorterService', () => {
  let service: TimelineSorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineSorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
