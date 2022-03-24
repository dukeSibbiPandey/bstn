import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaArrowAltCircleRightComponent } from './far-fa-arrow-alt-circle-right.component';

describe('FarFaArrowAltCircleRightComponent', () => {
  let component: FarFaArrowAltCircleRightComponent;
  let fixture: ComponentFixture<FarFaArrowAltCircleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaArrowAltCircleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaArrowAltCircleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
