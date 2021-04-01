import { TestBed } from '@angular/core/testing';

import { NewsResourceService } from './news-resource.service';

describe('NewsResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsResourceService = TestBed.get(NewsResourceService);
    expect(service).toBeTruthy();
  });
});
