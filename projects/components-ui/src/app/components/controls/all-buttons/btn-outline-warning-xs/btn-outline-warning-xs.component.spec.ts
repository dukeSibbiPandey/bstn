import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineWarningXsComponent } from './btn-outline-warning-xs.component';

describe('BtnOutlineWarningXsComponent', () => {
  let component: BtnOutlineWarningXsComponent;
  let fixture: ComponentFixture<BtnOutlineWarningXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineWarningXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineWarningXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
