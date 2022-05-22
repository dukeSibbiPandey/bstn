import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSuccessLgComponent } from './btn-success-lg.component';

describe('BtnSuccessLgComponent', () => {
  let component: BtnSuccessLgComponent;
  let fixture: ComponentFixture<BtnSuccessLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSuccessLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSuccessLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
