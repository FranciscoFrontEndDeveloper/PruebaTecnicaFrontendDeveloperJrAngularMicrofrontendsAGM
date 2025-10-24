import { TestBed } from '@angular/core/testing';

import { CaractercreationService } from './caractercreation.service';

describe('CaractercreationService', () => {
  let service: CaractercreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaractercreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
