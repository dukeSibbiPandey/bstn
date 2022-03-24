import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningSmComponent } from './btn-outline-warning-sm.component';

describe('BtnOutlineWarningSmComponent', () => {
  let component: BtnOutlineWarningSmComponent;
  let fixture: ComponentFixture<BtnOutlineWarningSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
