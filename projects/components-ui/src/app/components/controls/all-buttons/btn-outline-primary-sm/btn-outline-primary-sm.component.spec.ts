import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimarySmComponent } from './btn-outline-primary-sm.component';

describe('BtnOutlinePrimarySmComponent', () => {
  let component: BtnOutlinePrimarySmComponent;
  let fixture: ComponentFixture<BtnOutlinePrimarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
