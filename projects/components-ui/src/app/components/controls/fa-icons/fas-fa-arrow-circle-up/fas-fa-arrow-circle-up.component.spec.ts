import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowCircleUpComponent } from './fas-fa-arrow-circle-up.component';

describe('FasFaArrowCircleUpComponent', () => {
  let component: FasFaArrowCircleUpComponent;
  let fixture: ComponentFixture<FasFaArrowCircleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowCircleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowCircleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
