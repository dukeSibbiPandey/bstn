import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowsAltComponent } from './fas-fa-arrows-alt.component';

describe('FasFaArrowsAltComponent', () => {
  let component: FasFaArrowsAltComponent;
  let fixture: ComponentFixture<FasFaArrowsAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowsAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowsAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
