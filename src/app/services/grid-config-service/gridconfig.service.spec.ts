import { TestBed } from '@angular/core/testing';

import { GridconfigService } from './gridconfig.service';

describe('GridconfigService', () => {
  let service: GridconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
