import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaArrowAltCircleUpComponent } from './far-fa-arrow-alt-circle-up.component';

describe('FarFaArrowAltCircleUpComponent', () => {
  let component: FarFaArrowAltCircleUpComponent;
  let fixture: ComponentFixture<FarFaArrowAltCircleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaArrowAltCircleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaArrowAltCircleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
