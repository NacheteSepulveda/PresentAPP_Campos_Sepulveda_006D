import { TestBed } from '@angular/core/testing';

import { GetDocenteService } from './get-docente.service';

describe('GetDocenteService', () => {
  let service: GetDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
