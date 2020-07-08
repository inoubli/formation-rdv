import { TestBed } from '@angular/core/testing';

import { MesRdvService } from './mes-rdv.service';

describe('MesRdvService', () => {
  let service: MesRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
