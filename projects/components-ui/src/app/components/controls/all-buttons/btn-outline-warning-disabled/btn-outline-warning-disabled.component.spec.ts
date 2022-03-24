import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningDisabledComponent } from './btn-outline-warning-disabled.component';

describe('BtnOutlineWarningDisabledComponent', () => {
  let component: BtnOutlineWarningDisabledComponent;
  let fixture: ComponentFixture<BtnOutlineWarningDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
