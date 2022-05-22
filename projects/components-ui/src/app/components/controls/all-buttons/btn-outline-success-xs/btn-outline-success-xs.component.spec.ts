import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessXsComponent } from './btn-outline-success-xs.component';

describe('BtnOutlineSuccessXsComponent', () => {
  let component: BtnOutlineSuccessXsComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
