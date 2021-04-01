import { TestBed } from '@angular/core/testing';

import { LoginResourceService } from './login-resource.service';

describe('LoginResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginResourceService = TestBed.get(LoginResourceService);
    expect(service).toBeTruthy();
  });
});
