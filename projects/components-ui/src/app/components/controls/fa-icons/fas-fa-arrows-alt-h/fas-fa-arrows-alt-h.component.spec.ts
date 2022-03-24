import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowsAltHComponent } from './fas-fa-arrows-alt-h.component';

describe('FasFaArrowsAltHComponent', () => {
  let component: FasFaArrowsAltHComponent;
  let fixture: ComponentFixture<FasFaArrowsAltHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowsAltHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowsAltHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
