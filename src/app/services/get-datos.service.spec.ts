import { TestBed } from '@angular/core/testing';

import { GetDatosService } from './get-datos.service';

describe('GetDatosService', () => {
  let service: GetDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
