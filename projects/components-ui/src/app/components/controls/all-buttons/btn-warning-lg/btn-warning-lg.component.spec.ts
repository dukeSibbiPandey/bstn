import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningLgComponent } from './btn-warning-lg.component';

describe('BtnWarningLgComponent', () => {
  let component: BtnWarningLgComponent;
  let fixture: ComponentFixture<BtnWarningLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
