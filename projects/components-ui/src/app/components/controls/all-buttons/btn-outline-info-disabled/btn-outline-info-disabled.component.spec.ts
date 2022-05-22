import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineInfoDisabledComponent } from './btn-outline-info-disabled.component';

describe('BtnOutlineInfoDisabledComponent', () => {
  let component: BtnOutlineInfoDisabledComponent;
  let fixture: ComponentFixture<BtnOutlineInfoDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOutlineInfoDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineInfoDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
