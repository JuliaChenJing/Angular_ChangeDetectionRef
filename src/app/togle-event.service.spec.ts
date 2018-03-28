import { TestBed, inject } from '@angular/core/testing';

import { TogleEventService } from './togle-event.service';

describe('TogleEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TogleEventService]
    });
  });

  it('should be created', inject([TogleEventService], (service: TogleEventService) => {
    expect(service).toBeTruthy();
  }));
});
