import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineDangerLgComponent } from './btn-outline-danger-lg.component';

describe('BtnOutlineDangerLgComponent', () => {
  let component: BtnOutlineDangerLgComponent;
  let fixture: ComponentFixture<BtnOutlineDangerLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineDangerLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineDangerLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
