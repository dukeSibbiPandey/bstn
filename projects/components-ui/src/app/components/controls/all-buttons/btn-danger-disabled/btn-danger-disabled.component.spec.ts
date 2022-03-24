import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDangerDisabledComponent } from './btn-danger-disabled.component';

describe('BtnDangerDisabledComponent', () => {
  let component: BtnDangerDisabledComponent;
  let fixture: ComponentFixture<BtnDangerDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDangerDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDangerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
