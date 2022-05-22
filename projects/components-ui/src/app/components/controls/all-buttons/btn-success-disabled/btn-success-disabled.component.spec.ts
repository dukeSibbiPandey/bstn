import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSuccessDisabledComponent } from './btn-success-disabled.component';

describe('BtnSuccessDisabledComponent', () => {
  let component: BtnSuccessDisabledComponent;
  let fixture: ComponentFixture<BtnSuccessDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSuccessDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSuccessDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
