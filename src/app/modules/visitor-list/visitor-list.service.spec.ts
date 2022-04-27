import { TestBed } from '@angular/core/testing';

import { VisitorListService } from './visitor-list.service';

describe('VisitorListService', () => {
  let service: VisitorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
