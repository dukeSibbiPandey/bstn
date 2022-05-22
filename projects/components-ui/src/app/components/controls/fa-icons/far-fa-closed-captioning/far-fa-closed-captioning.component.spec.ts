import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaClosedCaptioningComponent } from './far-fa-closed-captioning.component';

describe('FarFaClosedCaptioningComponent', () => {
  let component: FarFaClosedCaptioningComponent;
  let fixture: ComponentFixture<FarFaClosedCaptioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaClosedCaptioningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaClosedCaptioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
