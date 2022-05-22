import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoLgComponent } from './btn-info-lg.component';

describe('BtnInfoLgComponent', () => {
  let component: BtnInfoLgComponent;
  let fixture: ComponentFixture<BtnInfoLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInfoLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInfoLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
