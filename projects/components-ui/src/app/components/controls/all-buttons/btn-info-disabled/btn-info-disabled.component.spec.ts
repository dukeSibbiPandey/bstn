import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInfoDisabledComponent } from './btn-info-disabled.component';

describe('BtnInfoDisabledComponent', () => {
  let component: BtnInfoDisabledComponent;
  let fixture: ComponentFixture<BtnInfoDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInfoDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnInfoDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
