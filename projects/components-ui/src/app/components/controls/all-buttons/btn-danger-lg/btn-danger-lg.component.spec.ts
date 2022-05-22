import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDangerLgComponent } from './btn-danger-lg.component';

describe('BtnDangerLgComponent', () => {
  let component: BtnDangerLgComponent;
  let fixture: ComponentFixture<BtnDangerLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDangerLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDangerLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
