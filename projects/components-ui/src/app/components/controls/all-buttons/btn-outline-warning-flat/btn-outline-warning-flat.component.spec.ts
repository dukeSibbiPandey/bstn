import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningFlatComponent } from './btn-outline-warning-flat.component';

describe('BtnOutlineWarningFlatComponent', () => {
  let component: BtnOutlineWarningFlatComponent;
  let fixture: ComponentFixture<BtnOutlineWarningFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
