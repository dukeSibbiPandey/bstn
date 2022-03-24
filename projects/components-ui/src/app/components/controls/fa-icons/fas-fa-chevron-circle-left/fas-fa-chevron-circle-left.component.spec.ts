import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaChevronCircleLeftComponent } from './fas-fa-chevron-circle-left.component';

describe('FasFaChevronCircleLeftComponent', () => {
  let component: FasFaChevronCircleLeftComponent;
  let fixture: ComponentFixture<FasFaChevronCircleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaChevronCircleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaChevronCircleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
