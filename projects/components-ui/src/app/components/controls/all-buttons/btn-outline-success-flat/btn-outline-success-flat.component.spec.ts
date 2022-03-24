import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSuccessFlatComponent } from './btn-outline-success-flat.component';

describe('BtnOutlineSuccessFlatComponent', () => {
  let component: BtnOutlineSuccessFlatComponent;
  let fixture: ComponentFixture<BtnOutlineSuccessFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSuccessFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSuccessFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
