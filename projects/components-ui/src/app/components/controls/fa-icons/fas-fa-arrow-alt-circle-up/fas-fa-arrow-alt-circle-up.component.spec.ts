import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowAltCircleUpComponent } from './fas-fa-arrow-alt-circle-up.component';

describe('FasFaArrowAltCircleUpComponent', () => {
  let component: FasFaArrowAltCircleUpComponent;
  let fixture: ComponentFixture<FasFaArrowAltCircleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowAltCircleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowAltCircleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
