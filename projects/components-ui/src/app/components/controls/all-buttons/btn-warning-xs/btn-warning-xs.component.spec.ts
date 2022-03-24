import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWarningXsComponent } from './btn-warning-xs.component';

describe('BtnWarningXsComponent', () => {
  let component: BtnWarningXsComponent;
  let fixture: ComponentFixture<BtnWarningXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnWarningXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWarningXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
