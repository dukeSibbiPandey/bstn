import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortNumericDownComponent } from './fas-fa-sort-numeric-down.component';

describe('FasFaSortNumericDownComponent', () => {
  let component: FasFaSortNumericDownComponent;
  let fixture: ComponentFixture<FasFaSortNumericDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortNumericDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortNumericDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
