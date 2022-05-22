import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortAmountDownAltComponent } from './fas-fa-sort-amount-down-alt.component';

describe('FasFaSortAmountDownAltComponent', () => {
  let component: FasFaSortAmountDownAltComponent;
  let fixture: ComponentFixture<FasFaSortAmountDownAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortAmountDownAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortAmountDownAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
