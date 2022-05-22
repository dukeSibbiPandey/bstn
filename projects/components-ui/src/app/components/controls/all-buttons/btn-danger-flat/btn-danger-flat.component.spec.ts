import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDangerFlatComponent } from './btn-danger-flat.component';

describe('BtnDangerFlatComponent', () => {
  let component: BtnDangerFlatComponent;
  let fixture: ComponentFixture<BtnDangerFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDangerFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDangerFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
