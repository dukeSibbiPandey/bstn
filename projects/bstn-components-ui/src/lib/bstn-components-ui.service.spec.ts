import { TestBed } from '@angular/core/testing';

import { BstnComponentsUiService } from './bstn-components-ui.service';

describe('BstnComponentsUiService', () => {
  let service: BstnComponentsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BstnComponentsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
