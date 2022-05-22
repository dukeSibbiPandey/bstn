import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaWheelchairComponent } from './fas-fa-wheelchair.component';

describe('FasFaWheelchairComponent', () => {
  let component: FasFaWheelchairComponent;
  let fixture: ComponentFixture<FasFaWheelchairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaWheelchairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaWheelchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
