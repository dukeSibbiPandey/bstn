import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryDisabledComponent } from './btn-primary-disabled.component';

describe('BtnPrimaryDisabledComponent', () => {
  let component: BtnPrimaryDisabledComponent;
  let fixture: ComponentFixture<BtnPrimaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
