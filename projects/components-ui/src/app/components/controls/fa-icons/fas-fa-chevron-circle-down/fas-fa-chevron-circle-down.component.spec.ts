import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronCircleDownComponent } from './fas-fa-chevron-circle-down.component';

describe('FasFaChevronCircleDownComponent', () => {
  let component: FasFaChevronCircleDownComponent;
  let fixture: ComponentFixture<FasFaChevronCircleDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronCircleDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronCircleDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
