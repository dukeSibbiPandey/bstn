import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryLgComponent } from './btn-primary-lg.component';

describe('BtnPrimaryLgComponent', () => {
  let component: BtnPrimaryLgComponent;
  let fixture: ComponentFixture<BtnPrimaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPrimaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
