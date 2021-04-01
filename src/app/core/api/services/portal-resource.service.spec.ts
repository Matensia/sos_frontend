import { TestBed } from '@angular/core/testing';

import { PortalResourceService } from './portal-resource.service';

describe('PortalResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalResourceService = TestBed.get(PortalResourceService);
    expect(service).toBeTruthy();
  });
});
