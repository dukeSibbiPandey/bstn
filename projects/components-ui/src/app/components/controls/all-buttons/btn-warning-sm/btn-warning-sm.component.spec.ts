import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningSmComponent } from './btn-warning-sm.component';

describe('BtnWarningSmComponent', () => {
  let component: BtnWarningSmComponent;
  let fixture: ComponentFixture<BtnWarningSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
