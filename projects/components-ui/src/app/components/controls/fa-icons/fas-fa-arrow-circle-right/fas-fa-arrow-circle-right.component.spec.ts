import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowCircleRightComponent } from './fas-fa-arrow-circle-right.component';

describe('FasFaArrowCircleRightComponent', () => {
  let component: FasFaArrowCircleRightComponent;
  let fixture: ComponentFixture<FasFaArrowCircleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowCircleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowCircleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
