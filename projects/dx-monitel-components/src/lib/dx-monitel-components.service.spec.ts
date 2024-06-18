import { TestBed } from '@angular/core/testing';

import { DxMonitelComponentsService } from './dx-monitel-components.service';

describe('DxMonitelComponentsService', () => {
  let service: DxMonitelComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxMonitelComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
