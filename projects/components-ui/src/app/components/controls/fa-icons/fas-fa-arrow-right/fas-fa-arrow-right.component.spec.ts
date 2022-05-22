import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowRightComponent } from './fas-fa-arrow-right.component';

describe('FasFaArrowRightComponent', () => {
  let component: FasFaArrowRightComponent;
  let fixture: ComponentFixture<FasFaArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
