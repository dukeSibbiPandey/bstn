import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronCircleRightComponent } from './fas-fa-chevron-circle-right.component';

describe('FasFaChevronCircleRightComponent', () => {
  let component: FasFaChevronCircleRightComponent;
  let fixture: ComponentFixture<FasFaChevronCircleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronCircleRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronCircleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
