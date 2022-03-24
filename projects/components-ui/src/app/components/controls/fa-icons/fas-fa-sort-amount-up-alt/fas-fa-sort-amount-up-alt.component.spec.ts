import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAmountUpAltComponent } from './fas-fa-sort-amount-up-alt.component';

describe('FasFaSortAmountUpAltComponent', () => {
  let component: FasFaSortAmountUpAltComponent;
  let fixture: ComponentFixture<FasFaSortAmountUpAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAmountUpAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAmountUpAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
