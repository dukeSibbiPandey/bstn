import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessLgComponent } from './btn-outline-success-lg.component';

describe('BtnOutlineSuccessLgComponent', () => {
  let component: BtnOutlineSuccessLgComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
