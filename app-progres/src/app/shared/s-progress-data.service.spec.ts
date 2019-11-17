import { TestBed } from '@angular/core/testing';

import { SProgressDataService } from './s-progress-data.service';

describe('SProgressDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SProgressDataService = TestBed.get(SProgressDataService);
    expect(service).toBeTruthy();
  });
});
