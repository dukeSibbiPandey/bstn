import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecondaryLgComponent } from './btn-secondary-lg.component';

describe('BtnSecondaryLgComponent', () => {
  let component: BtnSecondaryLgComponent;
  let fixture: ComponentFixture<BtnSecondaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSecondaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSecondaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
