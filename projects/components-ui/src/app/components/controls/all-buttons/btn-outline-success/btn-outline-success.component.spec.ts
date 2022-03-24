import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessComponent } from './btn-outline-success.component';

describe('BtnOutlineSuccessComponent', () => {
  let component: BtnOutlineSuccessComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
