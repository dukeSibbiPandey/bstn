import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryFlatComponent } from './btn-primary-flat.component';

describe('BtnPrimaryFlatComponent', () => {
  let component: BtnPrimaryFlatComponent;
  let fixture: ComponentFixture<BtnPrimaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
