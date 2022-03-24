import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarFaArrowAltCircleDownComponent } from './far-fa-arrow-alt-circle-down.component';

describe('FarFaArrowAltCircleDownComponent', () => {
  let component: FarFaArrowAltCircleDownComponent;
  let fixture: ComponentFixture<FarFaArrowAltCircleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarFaArrowAltCircleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarFaArrowAltCircleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
