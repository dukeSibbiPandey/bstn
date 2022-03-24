import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowCircleDownComponent } from './fas-fa-arrow-circle-down.component';

describe('FasFaArrowCircleDownComponent', () => {
  let component: FasFaArrowCircleDownComponent;
  let fixture: ComponentFixture<FasFaArrowCircleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowCircleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowCircleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
