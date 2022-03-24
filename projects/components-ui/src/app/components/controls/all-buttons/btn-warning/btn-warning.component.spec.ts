import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningComponent } from './btn-warning.component';

describe('BtnWarningComponent', () => {
  let component: BtnWarningComponent;
  let fixture: ComponentFixture<BtnWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
