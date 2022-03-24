import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSortNumericDownAltComponent } from './fas-fa-sort-numeric-down-alt.component';

describe('FasFaSortNumericDownAltComponent', () => {
  let component: FasFaSortNumericDownAltComponent;
  let fixture: ComponentFixture<FasFaSortNumericDownAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSortNumericDownAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSortNumericDownAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
