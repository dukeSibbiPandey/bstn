import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowAltCircleLeftComponent } from './fas-fa-arrow-alt-circle-left.component';

describe('FasFaArrowAltCircleLeftComponent', () => {
  let component: FasFaArrowAltCircleLeftComponent;
  let fixture: ComponentFixture<FasFaArrowAltCircleLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowAltCircleLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowAltCircleLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
