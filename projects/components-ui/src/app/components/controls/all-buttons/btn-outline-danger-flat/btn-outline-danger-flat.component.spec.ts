import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerFlatComponent } from './btn-outline-danger-flat.component';

describe('BtnOutlineDangerFlatComponent', () => {
  let component: BtnOutlineDangerFlatComponent;
  let fixture: ComponentFixture<BtnOutlineDangerFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
