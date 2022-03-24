import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoLgComponent } from './btn-outline-info-lg.component';

describe('BtnOutlineInfoLgComponent', () => {
  let component: BtnOutlineInfoLgComponent;
  let fixture: ComponentFixture<BtnOutlineInfoLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
