import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaClosedCaptioningComponent } from './fas-fa-closed-captioning.component';

describe('FasFaClosedCaptioningComponent', () => {
  let component: FasFaClosedCaptioningComponent;
  let fixture: ComponentFixture<FasFaClosedCaptioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaClosedCaptioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaClosedCaptioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
