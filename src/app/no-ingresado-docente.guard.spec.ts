import { TestBed } from '@angular/core/testing';

import { NoIngresadoDocenteGuard } from './no-ingresado-docente.guard';

describe('NoIngresadoDocenteGuard', () => {
  let guard: NoIngresadoDocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresadoDocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
