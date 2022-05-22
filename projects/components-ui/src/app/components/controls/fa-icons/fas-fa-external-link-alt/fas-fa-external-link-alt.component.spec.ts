import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaExternalLinkAltComponent } from './fas-fa-external-link-alt.component';

describe('FasFaExternalLinkAltComponent', () => {
  let component: FasFaExternalLinkAltComponent;
  let fixture: ComponentFixture<FasFaExternalLinkAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaExternalLinkAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaExternalLinkAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
