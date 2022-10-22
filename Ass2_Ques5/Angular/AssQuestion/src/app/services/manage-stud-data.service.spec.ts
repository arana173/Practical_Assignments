import { TestBed } from '@angular/core/testing';

import { ManageStudDataService } from './manage-stud-data.service';

describe('ManageStudDataService', () => {
  let service: ManageStudDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStudDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
