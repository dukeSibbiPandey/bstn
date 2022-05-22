import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimaryFlatComponent } from './btn-outline-primary-flat.component';

describe('BtnOutlinePrimaryFlatComponent', () => {
  let component: BtnOutlinePrimaryFlatComponent;
  let fixture: ComponentFixture<BtnOutlinePrimaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
