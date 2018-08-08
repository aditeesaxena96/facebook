import { TestBed, inject } from '@angular/core/testing';

import { LoginauthenticationService } from './loginauthentication.service';

describe('LoginauthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginauthenticationService]
    });
  });

  it('should be created', inject([LoginauthenticationService], (service: LoginauthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
