import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningLgComponent } from './btn-outline-warning-lg.component';

describe('BtnOutlineWarningLgComponent', () => {
  let component: BtnOutlineWarningLgComponent;
  let fixture: ComponentFixture<BtnOutlineWarningLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
