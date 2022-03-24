import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortNumericUpAltComponent } from './fas-fa-sort-numeric-up-alt.component';

describe('FasFaSortNumericUpAltComponent', () => {
  let component: FasFaSortNumericUpAltComponent;
  let fixture: ComponentFixture<FasFaSortNumericUpAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortNumericUpAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortNumericUpAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
