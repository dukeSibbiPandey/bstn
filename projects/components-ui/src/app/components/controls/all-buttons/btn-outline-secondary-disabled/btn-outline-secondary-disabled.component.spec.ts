import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondaryDisabledComponent } from './btn-outline-secondary-disabled.component';

describe('BtnOutlineSecondaryDisabledComponent', () => {
  let component: BtnOutlineSecondaryDisabledComponent;
  let fixture: ComponentFixture<BtnOutlineSecondaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
