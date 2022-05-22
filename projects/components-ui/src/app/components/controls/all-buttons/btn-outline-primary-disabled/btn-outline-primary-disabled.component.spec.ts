import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimaryDisabledComponent } from './btn-outline-primary-disabled.component';

describe('BtnOutlinePrimaryDisabledComponent', () => {
  let component: BtnOutlinePrimaryDisabledComponent;
  let fixture: ComponentFixture<BtnOutlinePrimaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
