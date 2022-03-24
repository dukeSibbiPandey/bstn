import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessSmComponent } from './btn-outline-success-sm.component';

describe('BtnOutlineSuccessSmComponent', () => {
  let component: BtnOutlineSuccessSmComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
