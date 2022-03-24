import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningFlatComponent } from './btn-warning-flat.component';

describe('BtnWarningFlatComponent', () => {
  let component: BtnWarningFlatComponent;
  let fixture: ComponentFixture<BtnWarningFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
