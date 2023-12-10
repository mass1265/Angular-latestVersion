import { TestBed } from '@angular/core/testing';

import { DefaultConfigService } from './default-config.service';

describe('DefaultConfigService', () => {
  let service: DefaultConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
