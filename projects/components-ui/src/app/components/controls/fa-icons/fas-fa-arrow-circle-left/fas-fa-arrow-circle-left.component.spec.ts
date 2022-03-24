import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowCircleLeftComponent } from './fas-fa-arrow-circle-left.component';

describe('FasFaArrowCircleLeftComponent', () => {
  let component: FasFaArrowCircleLeftComponent;
  let fixture: ComponentFixture<FasFaArrowCircleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowCircleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowCircleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
