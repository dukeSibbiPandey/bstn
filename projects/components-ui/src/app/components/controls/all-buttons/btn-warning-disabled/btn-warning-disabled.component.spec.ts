import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningDisabledComponent } from './btn-warning-disabled.component';

describe('BtnWarningDisabledComponent', () => {
  let component: BtnWarningDisabledComponent;
  let fixture: ComponentFixture<BtnWarningDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
