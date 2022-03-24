import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaLocationArrowComponent } from './fas-fa-location-arrow.component';

describe('FasFaLocationArrowComponent', () => {
  let component: FasFaLocationArrowComponent;
  let fixture: ComponentFixture<FasFaLocationArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaLocationArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaLocationArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
