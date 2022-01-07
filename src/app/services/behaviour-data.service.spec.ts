import { TestBed } from '@angular/core/testing';

import { BehaviourDataService } from './behaviour-data.service';

describe('BehaviourDataService', () => {
  let service: BehaviourDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
