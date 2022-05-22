import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExternalLinkSquareAltComponent } from './fas-fa-external-link-square-alt.component';

describe('FasFaExternalLinkSquareAltComponent', () => {
  let component: FasFaExternalLinkSquareAltComponent;
  let fixture: ComponentFixture<FasFaExternalLinkSquareAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExternalLinkSquareAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExternalLinkSquareAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
