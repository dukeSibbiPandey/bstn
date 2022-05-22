import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLowVisionComponent } from './fas-fa-low-vision.component';

describe('FasFaLowVisionComponent', () => {
  let component: FasFaLowVisionComponent;
  let fixture: ComponentFixture<FasFaLowVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLowVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLowVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
