import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineSecondaryLgComponent } from './btn-outline-secondary-lg.component';

describe('BtnOutlineSecondaryLgComponent', () => {
  let component: BtnOutlineSecondaryLgComponent;
  let fixture: ComponentFixture<BtnOutlineSecondaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineSecondaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineSecondaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
