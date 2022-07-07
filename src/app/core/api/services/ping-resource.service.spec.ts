import { TestBed } from '@angular/core/testing';

import { PingResourceService } from './ping-resource.service';

describe('PingResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PingResourceService = TestBed.get(PingResourceService);
    expect(service).toBeTruthy();
  });
});
