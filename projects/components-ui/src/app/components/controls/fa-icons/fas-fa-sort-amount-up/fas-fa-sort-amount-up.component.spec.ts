import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAmountUpComponent } from './fas-fa-sort-amount-up.component';

describe('FasFaSortAmountUpComponent', () => {
  let component: FasFaSortAmountUpComponent;
  let fixture: ComponentFixture<FasFaSortAmountUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAmountUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAmountUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
