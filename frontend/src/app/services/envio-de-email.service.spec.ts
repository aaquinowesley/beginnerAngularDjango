import { TestBed } from '@angular/core/testing';

import { EnvioDeEmailService } from './envio-de-email.service';

describe('EnvioDeEmailService', () => {
  let service: EnvioDeEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDeEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
