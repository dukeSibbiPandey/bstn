import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondaryDisabledComponent } from './btn-secondary-disabled.component';

describe('BtnSecondaryDisabledComponent', () => {
  let component: BtnSecondaryDisabledComponent;
  let fixture: ComponentFixture<BtnSecondaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSecondaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecondaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
