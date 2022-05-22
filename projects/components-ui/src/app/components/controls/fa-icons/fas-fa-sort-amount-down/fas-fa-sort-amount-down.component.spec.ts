import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAmountDownComponent } from './fas-fa-sort-amount-down.component';

describe('FasFaSortAmountDownComponent', () => {
  let component: FasFaSortAmountDownComponent;
  let fixture: ComponentFixture<FasFaSortAmountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAmountDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAmountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
