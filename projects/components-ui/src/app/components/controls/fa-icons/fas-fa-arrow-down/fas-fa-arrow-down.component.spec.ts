import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaArrowDownComponent } from './fas-fa-arrow-down.component';

describe('FasFaArrowDownComponent', () => {
  let component: FasFaArrowDownComponent;
  let fixture: ComponentFixture<FasFaArrowDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaArrowDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaArrowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
