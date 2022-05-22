import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowAltCircleRightComponent } from './fas-fa-arrow-alt-circle-right.component';

describe('FasFaArrowAltCircleRightComponent', () => {
  let component: FasFaArrowAltCircleRightComponent;
  let fixture: ComponentFixture<FasFaArrowAltCircleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowAltCircleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowAltCircleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
