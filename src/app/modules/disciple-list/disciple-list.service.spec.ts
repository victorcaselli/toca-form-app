import { TestBed } from '@angular/core/testing';

import { DiscipleListService } from './disciple-list.service';

describe('DiscipleListService', () => {
  let service: DiscipleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscipleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
