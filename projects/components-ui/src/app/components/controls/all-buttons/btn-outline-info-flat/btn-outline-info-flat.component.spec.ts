import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoFlatComponent } from './btn-outline-info-flat.component';

describe('BtnOutlineInfoFlatComponent', () => {
  let component: BtnOutlineInfoFlatComponent;
  let fixture: ComponentFixture<BtnOutlineInfoFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
