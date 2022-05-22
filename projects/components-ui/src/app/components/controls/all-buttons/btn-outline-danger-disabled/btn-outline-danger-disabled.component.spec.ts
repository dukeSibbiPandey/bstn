import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerDisabledComponent } from './btn-outline-danger-disabled.component';

describe('BtnOutlineDangerDisabledComponent', () => {
  let component: BtnOutlineDangerDisabledComponent;
  let fixture: ComponentFixture<BtnOutlineDangerDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
