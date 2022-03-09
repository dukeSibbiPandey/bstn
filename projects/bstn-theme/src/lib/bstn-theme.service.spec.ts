import { TestBed } from '@angular/core/testing';

import { BstnThemeService } from './bstn-theme.service';

describe('BstnThemeService', () => {
  let service: BstnThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BstnThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
