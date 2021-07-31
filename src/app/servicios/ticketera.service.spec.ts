import { TestBed } from '@angular/core/testing';

import { TicketeraService } from './ticketera.service';

describe('TicketeraService', () => {
  let service: TicketeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
