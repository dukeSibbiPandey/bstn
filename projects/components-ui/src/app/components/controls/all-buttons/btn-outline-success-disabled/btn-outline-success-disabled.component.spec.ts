import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessDisabledComponent } from './btn-outline-success-disabled.component';

describe('BtnOutlineSuccessDisabledComponent', () => {
  let component: BtnOutlineSuccessDisabledComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
