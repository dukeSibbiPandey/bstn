import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronCircleUpComponent } from './fas-fa-chevron-circle-up.component';

describe('FasFaChevronCircleUpComponent', () => {
  let component: FasFaChevronCircleUpComponent;
  let fixture: ComponentFixture<FasFaChevronCircleUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronCircleUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronCircleUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
