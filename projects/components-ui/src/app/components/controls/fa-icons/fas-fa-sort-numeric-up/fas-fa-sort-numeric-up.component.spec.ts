import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortNumericUpComponent } from './fas-fa-sort-numeric-up.component';

describe('FasFaSortNumericUpComponent', () => {
  let component: FasFaSortNumericUpComponent;
  let fixture: ComponentFixture<FasFaSortNumericUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortNumericUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortNumericUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
