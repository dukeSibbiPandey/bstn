import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlinePrimaryLgComponent } from './btn-outline-primary-lg.component';

describe('BtnOutlinePrimaryLgComponent', () => {
  let component: BtnOutlinePrimaryLgComponent;
  let fixture: ComponentFixture<BtnOutlinePrimaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlinePrimaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlinePrimaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
