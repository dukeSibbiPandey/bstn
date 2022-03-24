import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowAltCircleDownComponent } from './fas-fa-arrow-alt-circle-down.component';

describe('FasFaArrowAltCircleDownComponent', () => {
  let component: FasFaArrowAltCircleDownComponent;
  let fixture: ComponentFixture<FasFaArrowAltCircleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowAltCircleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowAltCircleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
