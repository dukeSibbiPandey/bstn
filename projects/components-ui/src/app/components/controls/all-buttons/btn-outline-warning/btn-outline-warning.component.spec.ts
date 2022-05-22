import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningComponent } from './btn-outline-warning.component';

describe('BtnOutlineWarningComponent', () => {
  let component: BtnOutlineWarningComponent;
  let fixture: ComponentFixture<BtnOutlineWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
